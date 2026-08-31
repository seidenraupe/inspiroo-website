import Image, { type ImageProps } from "next/image";

import { withBase } from "@/lib/paths";
import { cn } from "@/lib/utils";

type ContentImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export function ContentImage({
  src,
  alt,
  className,
  ...props
}: ContentImageProps) {
  return (
    <Image
      src={withBase(src)}
      alt={alt}
      className={cn(className)}
      {...props}
    />
  );
}
