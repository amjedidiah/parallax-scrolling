import { PropsWithChildren } from "react";

type Props = {
  imageUrl: string;
} & PropsWithChildren;

export default function ParallaxSection({ imageUrl, children }: Props) {
  const bgImage = `url('/images/${imageUrl}')`;

  return (
    <section className="relative">
      <article
        className={`h-screen w-full bg-fixed bg-left-top bg-no-repeat bg-cover bg-[${bgImage}]`}
      />

      {children && (
        <article className="absolute left-0 top-0 w-full h-full">
          {children}
        </article>
      )}
    </section>
  );
}
