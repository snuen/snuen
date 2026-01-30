import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface TILFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
}

interface TILEntry {
  date: string;
  title: string;
  content: string;
  url: string;
}

interface TILArticle {
  month: string;
  year: string;
  entries: TILEntry[];
  githubUrl: string;
}

export const GET: RequestHandler = async () => {
  try {
    // GitHub APIでTILリポジトリの2025フォルダの内容を取得
    const response = await fetch(
      'https://api.github.com/repos/snuen/til/contents/2025',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'snuen-portfolio'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch TIL files');
    }

    const files: TILFile[] = await response.json();
    
    // .mdファイルのみをフィルタリングして降順にソート
    const mdFiles = files
      .filter((file) => file.name.endsWith('.md'))
      .sort((a, b) => b.name.localeCompare(a.name));

    // 最新3件のファイルを取得
    const recentFiles = mdFiles.slice(0, 3);

    // 各ファイルの内容を取得してパース
    const articles: TILArticle[] = await Promise.all(
      recentFiles.map(async (file) => {
        const contentResponse = await fetch(file.download_url);
        const content = await contentResponse.text();

        // ファイル名から月を取得（例: 08.md -> August）
        const monthNumber = file.name.replace('.md', '');
        const monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const monthName = monthNames[parseInt(monthNumber) - 1] || monthNumber;

        // Markdownから個別のエントリーを抽出
        const entries = parseMarkdownEntries(content);

        return {
          month: monthName,
          year: '2025',
          entries,
          githubUrl: file.html_url
        };
      })
    );

    return json(articles);
  } catch (error) {
    console.error('Error fetching TIL articles:', error);
    return json({ error: 'Failed to fetch TIL articles' }, { status: 500 });
  }
};

function parseMarkdownEntries(markdown: string): TILEntry[] {
  const entries: TILEntry[] = [];
  
  // ## で始まる各エントリーを抽出（テンプレートコメントは除外）
  const entryPattern = /## (\d{4}-\d{2}-\d{2}): (.+?)\n([\s\S]*?)(?=\n## \d{4}-\d{2}-\d{2}:|---\n\n<!--|\n\n<!--|$)/g;
  
  let match;
  while ((match = entryPattern.exec(markdown)) !== null) {
    const [, date, title, content] = match;
    
    // コンテンツの最初の段落を抽出（最大200文字）
    const contentLines = content.trim().split('\n');
    const firstParagraph = contentLines
      .find(line => line.trim() && !line.startsWith('#') && !line.startsWith('```'))
      ?.trim() || '';
    
    const truncatedContent = firstParagraph.length > 200 
      ? firstParagraph.substring(0, 200) + '...' 
      : firstParagraph;

    entries.push({
      date,
      title: title.trim(),
      content: truncatedContent,
      url: `https://github.com/snuen/til/blob/main/2025/${date.substring(5, 7)}.md`
    });
  }

  return entries;
}
