import { PropsWithChildren } from "react";

type Props = {
  className: string;
} & PropsWithChildren;

export default function ParallaxSection({ className, children }: Props) {
  return (
    <section
      className={`min-h-screen bg-fixed bg-center lg:bg-left-top bg-no-repeat bg-cover ${className} `}
    >
      {children}
    </section>
  );
}
