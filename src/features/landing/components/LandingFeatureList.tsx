interface FeatureListProps {
  items: string[];
}



const LandingFeatureList = ({ items }: FeatureListProps) => {
  return (
    <div className="flex flex-col w-full h-auto justify-center md:justify-start items-center md:items-start text-brand-pink">
      <ul className="text-[clamp(1.25rem,3vw,2.25rem)] font-bold leading-tight text-brand-pink">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


export default LandingFeatureList;
