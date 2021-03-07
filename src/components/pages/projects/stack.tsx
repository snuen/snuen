import { FC } from 'react';
import { IconExternalLink } from '@/components/atoms/icons';

interface IStackTitleAndIconProps {
  title: IStackProps['title'];
  isValidLink: boolean;
}

const StackTitleAndIcon = ({ title, isValidLink }: IStackTitleAndIconProps) => (
  <>
    {title}
    {isValidLink && (
      <span className="inline-block align-middle w-4 h-4 mb-0.5 ml-1">
        <IconExternalLink />
      </span>
    )}
  </>
);

interface IStackProps {
  link: string;
  title: string;
}

export const Stack: FC<IStackProps> = ({ link, title, children }) => {
  const isDummyLink = link === `#`;

  return (
    <div className="border-b border-dashed border-gray-900 dark:border-white mb-4 pt-4 pb-8">
      <p className="font-bold dark:text-white">
        {isDummyLink ? (
          <StackTitleAndIcon title={title} isValidLink={!isDummyLink} />
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <StackTitleAndIcon title={title} isValidLink={!isDummyLink} />
          </a>
        )}
      </p>
      <div className="text-sm">{children}</div>
    </div>
  );
};
