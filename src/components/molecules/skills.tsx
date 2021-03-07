interface ISkillsProps {
  skillsText: string;
}

export const Skills = ({ skillsText }: ISkillsProps) => (
  <ul className="flex items-center">
    {skillsText.split(`,`).map((skillText) => {
      const st = skillText.trim();
      const stl = st.toLowerCase();

      return (
        <li
          key={stl}
          className={`h-6 px-2 mr-2 border rounded text-xs leading-6 text-${stl}`}
        >
          {st}
        </li>
      );
    })}
  </ul>
);
