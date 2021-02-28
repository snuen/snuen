import { FC } from 'react';

interface ISectionProps {
  heading: string;
}

export const Section: FC<ISectionProps> = ({ heading, children }) => (
  <section className="mb-8">
    <h2 className="mb-3 text-2xl font-bold">{heading}</h2>
    {children}
  </section>
);
