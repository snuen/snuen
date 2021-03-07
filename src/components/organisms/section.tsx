import { FC } from 'react';

const headingStyleReducer = (headingLevel: ISectionProps['headingLevel']) => {
  switch (headingLevel) {
    case `two`:
      return { margin: `mb-8`, fontSize: `text-2xl` };
    case `three`:
      return { margin: `mb-7`, fontSize: `text-xl` };
    case `four`:
      return { margin: `mb-6`, fontSize: `text-lg` };
    default:
      return { margin: ``, fontSize: `` };
  }
};

interface ISectionProps {
  headingText: string;
  headingLevel: 'two' | 'three' | 'four';
}

export const Section: FC<ISectionProps> = ({
  headingText,
  headingLevel,
  children,
}) => {
  const { margin, fontSize } = headingStyleReducer(headingLevel);

  return (
    <section className={margin}>
      <h2 className={`mb-2 font-bold ${fontSize}`}>{headingText}</h2>
      {children}
    </section>
  );
};
