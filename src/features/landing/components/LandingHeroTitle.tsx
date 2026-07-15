type HeroTitleProps = {
  items: readonly string[];
};

const LandingHeroTitle = ({ items }: HeroTitleProps) => {
  return (
    <div className="flex w-full h-auto justify-center sm:justify-start">
      <ul className="text-brand-primary font-league-spartan font-bold text-[clamp(4rem,10dvw,10rem)] leading-[0.9]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LandingHeroTitle;
