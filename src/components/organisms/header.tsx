import Link from 'next/link';

const IconMoon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const IconSun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MENU_ITEMS = [
  {
    name: `me`,
    link: `/`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: `projects`,
    link: `/projects`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    name: `work`,
    link: `/work`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
          clipRule="evenodd"
        />
        <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
      </svg>
    ),
  },
];

export const Header = () => (
  <header className="fixed bottom-0 right-0 left-0 w-full h-12 bg-gray-300 dark:bg-gray-700 md:top-0 md:w-64 md:min-w-64 md:h-full md:p-8">
    <nav className="h-full md:pt-4">
      <ul className="flex h-full md:flex-col md:py-2">
        {MENU_ITEMS.map(({ name, link, icon }) => (
          <li key={name} className="flex-grow md:mb-4 md:flex-grow-0">
            <Link href={link}>
              <a className="flex justify-center items-center h-full uppercase md:items-start">
                <span className="inline-block w-5 text-center md:flex md:items-center md:w-full">
                  <span className="md:inline-block md:w-5 md:mr-3">{icon}</span>
                  <span className="hidden md:inline">{name}</span>
                </span>
              </a>
            </Link>
          </li>
        ))}
        <li key="mode" className="flex-grow md:mt-auto md:mb-4 md:flex-grow-0">
          <button
            type="button"
            className="flex justify-center items-center w-full h-full uppercase focus:outline-none md:w-6 md:h-6"
          >
            <span className="inline-block w-5 h-5 text-center md:flex md:items-center md:w-full">
              <IconMoon />
            </span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
);
