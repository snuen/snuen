export interface ISkillsProps {
  /**
   * Comma separated skills text
   */
  skillsText?: string;
  /**
   * TailwindCSS classNames for ul tag
   */
  classNameUl: string;
  /**
   * TailwindCSS classNames for li tag
   */
  classNameLi: string;
}

/**
 * Skills component
 */
export const Skills = ({
  skillsText,
  classNameUl,
  classNameLi,
}: ISkillsProps) => {
  if (typeof skillsText === `undefined`) {
    return null;
  }
  return (
    <ul className={classNameUl}>
      {skillsText.split(`,`).map((skillText) => {
        const st = skillText.trim();
        const stl = st.toLowerCase();

        return (
          <li key={stl} className={`${classNameLi} text-${stl}`}>
            {st}
          </li>
        );
      })}
    </ul>
  );
};
