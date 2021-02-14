import Link from 'next/link';

const SVG_ICONS = [
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
  <header className="fixed bottom-0 right-0 left-0 w-full h-12 bg-gray-700 md:p-8 md:min-w-56 md:w-56 lg:min-w-64 lg:w-64">
    <nav className="h-full md:pt-4">
      <ul className="flex h-full md:m-0">
        {SVG_ICONS.map(({ name, link, icon }) => (
          <li key={name} className="flex-grow md:mb-4 md:flex-grow-0">
            <Link href={link}>
              <a className="flex justify-center items-center h-full uppercase">
                <span className="inline-block w-5 text-center md:w-5">
                  {icon}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
