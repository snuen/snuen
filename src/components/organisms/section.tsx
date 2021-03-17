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

export interface ISectionProps {
  /**
   * Heading text
   */
  headingText: string;
  /**
   * Which heading level
   */
  headingLevel: 'two' | 'three' | 'four';
  /**
   * children react node
   */
  children: React.ReactNode;
}

/**
 * Section component
 */
export const Section = ({
  headingText,
  headingLevel,
  children,
}: ISectionProps) => {
  const { margin, fontSize } = headingStyleReducer(headingLevel);

  return (
    <section className={margin}>
      <h2 className={`mb-2 font-bold ${fontSize}`}>{headingText}</h2>
      {children}
    </section>
  );
};
