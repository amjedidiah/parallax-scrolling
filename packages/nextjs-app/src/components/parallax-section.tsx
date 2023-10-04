import { PropsWithChildren } from "react";

type Props = {
  className: string;
  id?: string;
} & PropsWithChildren;

export default function ParallaxSection({ className, id, children }: Props) {
  return (
    <section
      className={`min-h-screen bg-fixed bg-center lg:bg-left-top bg-no-repeat bg-cover ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}
