import { default as NextImage, ImageProps } from "next/image";
import { ImageFragment } from "../../../app/api/generated/graphql/graphql";
import { SampleImageComponent } from "../../../rich-text";

const Image: React.FC<
  { block: ImageFragment } & Omit<ImageProps, "src" | "alt">
> = ({ block, ...props }) => {
  const { altText, asset } = block || {};
  const { path, metadata, url } = asset || {};
  const { dimensions } = metadata || {};
  const { height, width } = dimensions || {};
    const sizes = [320, 420, 720, 1024, 1080, 1440, 1920];

  // Calculate the largest width available
  const largestWidth = Math.max(...sizes);

  // Generate the sizes string for responsive images
  const sizesString = sizes
    .map((size) => `(max-width: ${size}px) ${size}px`)
    .concat(`${largestWidth}px`)
    .join(', ');
  return url ? (
    <NextImage
      src={url}
      height={props.height ?? Number(height)}
      width={props.width ?? Number(width)}
      {...props}
      alt={altText || ""}
      sizes={sizesString}
    
      
    />
  ) : (
    <SampleImageComponent value={block} isInline={false} />
  );
};

export default Image;
