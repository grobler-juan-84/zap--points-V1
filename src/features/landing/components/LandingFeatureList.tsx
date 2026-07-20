interface FeatureListProps {
  items: readonly string[];
}

const LandingFeatureList = ({ items }: FeatureListProps) => {
  return (
    <div className="flex flex-col w-full h-auto items-center sm:items-start text-brand-secondary">
      <ul className="text-[clamp(1.25rem,3vw,2.25rem)] font-league-spartan font-bold leading-tight text-brand-secondary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


export default LandingFeatureList;
