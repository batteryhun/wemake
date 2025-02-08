interface HeroProps {
  title: string;
  description?: string;
  className?: string;
}

export function Hero({ title, description, className = "" }: HeroProps) {
  return (
    <div
      className={`flex flex-col py-10 justify-center items-center rounded-md bg-gradient-to-t from-background to-primary/10 ${className}`}
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-light text-foreground">{description}</p>
    </div>
  );
}
