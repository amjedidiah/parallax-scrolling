import { lato, oswald } from "@/utils/font.util";

type Props = {
  number: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionHeader({
  number,
  title,
  description,
  className,
}: Props) {
  return (
    <header className={className}>
      <div className="container">
        <h2
          className={`leading-[1.2] ${oswald.variable} font-oswald font-bold`}
        >
          <span
            className={`text-[6.5rem] sm:text-[8.5rem] text-blue-200 relative after:absolute after:content-[' '] after:w-4 after:h-4 after:bottom-[1.875rem] sm:after:bottom-10 after:-right-[18px] after:bg-blue-200`}
          >
            {number}
          </span>
          <span className="text-[2rem] text-blue-100 uppercase relative -top-7">
            {title}
          </span>
        </h2>
        <p
          className={`${lato.variable} font-lato text-black leading-[1.5] max-w-[809px] sm:-mt-4 sm:ps-20`}
        >
          {description}
        </p>
      </div>
    </header>
  );
}
