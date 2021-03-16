import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { Icon, IconType } from '@/components/atoms/icon';
import * as utils from '@/utils';

const MENU_ITEMS = [
  {
    name: `me`,
    link: `/`,
    icon: (
      <Icon type={IconType.Me} className="md:inline-block md:w-5 md:mr-3" />
    ),
  },
  {
    name: `projects`,
    link: `/projects`,
    icon: (
      <Icon
        type={IconType.Projects}
        className="md:inline-block md:w-5 md:mr-3"
      />
    ),
  },
  {
    name: `work`,
    link: `/work`,
    icon: (
      <Icon type={IconType.Work} className="md:inline-block md:w-5 md:mr-3" />
    ),
  },
];

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const { asPath } = useRouter();
  const isClient = utils.hooks.useClient();
  const isDarkTheme = theme === `dark`;

  return (
    <header className="fixed bottom-0 right-0 left-0 w-full h-12 bg-gray-300 dark:bg-gray-700 md:top-0 md:w-64 md:min-w-64 md:h-full md:p-8">
      <nav className="h-full md:pt-4">
        <ul className="flex h-full md:flex-col md:py-2">
          {MENU_ITEMS.map(({ name, link, icon }) => (
            <li key={name} className="flex-grow md:mb-4 md:flex-grow-0">
              <Link href={link}>
                <a
                  className={`flex justify-center items-center h-full uppercase md:items-start${
                    asPath !== link && ` text-gray-500 dark:text-gray-400`
                  }`}
                >
                  <span className="inline-block w-5 text-center md:flex md:items-center md:w-full">
                    {icon}
                    <span className="hidden md:inline-block md:align-middle md:mt-0.5">
                      {name}
                    </span>
                  </span>
                </a>
              </Link>
            </li>
          ))}

          {isClient && (
            <li
              key="mode"
              className="flex-grow md:mt-auto md:mb-4 md:flex-grow-0"
            >
              <button
                type="button"
                onClick={() => {
                  setTheme(isDarkTheme ? `light` : `dark`);
                }}
                className="flex justify-center items-center w-full h-full uppercase focus:outline-none md:w-6 md:h-6"
              >
                <Icon
                  type={isDarkTheme ? IconType.Sun : IconType.Moon}
                  className="inline-block w-5 h-5 text-center md:flex md:items-center md:w-full"
                />
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
