<script lang="ts">
  import { onMount } from 'svelte';
  import Heading from '$lib/components/ui/heading.svelte';
  import ArrowTopRightOnSquare from '$lib/components/svgs/arrow-top-right-on-square.svelte';

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

  let articles: TILArticle[] = [];
  let loading = true;
  let error = false;

  onMount(async () => {
    try {
      const response = await fetch('/api/til');
      if (!response.ok) {
        throw new Error('Failed to fetch TIL articles');
      }
      articles = await response.json();
    } catch (e) {
      console.error('Error loading TIL articles:', e);
      error = true;
    } finally {
      loading = false;
    }
  });

  function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<section class="mb-8">
  <div class="flex items-center justify-between mb-4">
    <Heading level={2}>TIL (Today I Learned)</Heading>
    <a
      href="https://github.com/snuen/til"
      target="_blank"
      rel="noopener noreferrer"
      class="link link-hover text-sm flex items-center gap-1"
    >
      View all on GitHub
      <ArrowTopRightOnSquare />
    </a>
  </div>

  {#if loading}
    <div class="flex justify-center py-8">
      <span class="loading loading-spinner loading-md"></span>
    </div>
  {:else if error}
    <div class="alert alert-warning">
      <span>TIL記事の読み込みに失敗しました。</span>
    </div>
  {:else if articles.length === 0}
    <p class="text-base-content/70">まだ記事がありません。</p>
  {:else}
    <div class="space-y-6">
      {#each articles as article}
        {#if article.entries.length > 0}
          <div class="space-y-4">
            {#each article.entries as entry}
              <article class="card bg-base-200 hover:bg-base-300 transition-colors">
                <div class="card-body p-4">
                  <div class="flex items-start justify-between gap-2">
                    <div class="flex-1">
                      <time class="text-xs text-base-content/60">
                        {formatDate(entry.date)}
                      </time>
                      <h3 class="font-semibold mt-1 mb-2">
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="link link-hover"
                        >
                          {entry.title}
                        </a>
                      </h3>
                      {#if entry.content}
                        <p class="text-sm text-base-content/80 line-clamp-2">
                          {entry.content}
                        </p>
                      {/if}
                    </div>
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-ghost btn-sm btn-square flex-shrink-0"
                      aria-label="GitHubで開く"
                    >
                      <ArrowTopRightOnSquare />
                    </a>
                  </div>
                </div>
              </article>
            {/each}
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</section>
