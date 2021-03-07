import { FC } from 'react';
import { IconExternalLink } from '@/components/atoms/icons';

interface IStackProps {
  link: string;
  title: string;
}

export const Stack: FC<IStackProps> = ({ link, title, children }) => (
  <div className="border-b border-dashed border-gray-900 dark:border-white mb-4 pt-4 pb-8">
    <p className="font-bold dark:text-white">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {title}
        <span className="inline-block align-middle w-4 h-4 mb-0.5 ml-1">
          <IconExternalLink />
        </span>
      </a>
    </p>
    <div className="text-sm">{children}</div>
  </div>
);
