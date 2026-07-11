import Image from "next/image";
import { unsplash, IMG, type ImgKey } from "@/lib/images";

/**
 * Wrapper immagine unificato.
 *  - `imgKey`  → foto Unsplash dalla libreria (lib/images), hot-linked.
 *  - `id`      → ID Unsplash grezzo, hot-linked.
 *  - `src`     → foto locale (/products…), ottimizzata da Next.
 * Le Unsplash sono `unoptimized` per evitare fetch in fase di build.
 */
type BaseProps = {
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  w?: number;
};

type Props = BaseProps & {
  imgKey?: ImgKey;
  id?: string;
  src?: string;
};

export function Photo({ alt, className, sizes, priority, fill, width, height, w, imgKey, id, src }: Props) {
  const usId = imgKey ? IMG[imgKey] : id;
  const isUnsplash = Boolean(usId);
  const finalSrc = isUnsplash ? unsplash(usId!, w ?? 1200) : (src ?? "");

  if (fill) {
    return (
      <Image
        src={finalSrc}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        unoptimized={isUnsplash}
        className={className}
      />
    );
  }
  return (
    <Image
      src={finalSrc}
      alt={alt}
      width={width ?? 800}
      height={height ?? 800}
      sizes={sizes}
      priority={priority}
      unoptimized={isUnsplash}
      className={className}
    />
  );
}
