import { FC } from 'react';
import { IconExternalLink } from '@/components/atoms/icons';

interface IStackProps {
  link: string;
  title: string;
}

export const Stack: FC<IStackProps> = ({ link, title, children }) => (
  <div className="border-b border-dashed mb-4 py-4">
    <p className="font-bold text-white">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
        <span className="inline-block w-4 h-4 ml-1">
          <IconExternalLink />
        </span>
      </a>
    </p>
    <div className="text-sm">{children}</div>
  </div>
);
