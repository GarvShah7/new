import { PortableTextReactComponents } from "@portabletext/react";
import DynamicComponent from "./components/DynamicComponent";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import { getClient } from "./app/api/lib/sanity-client";
import Link from "./components/Common/Link";

export const SampleImageComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: any;
}) => {
  if (!!!value.asset) {
    return null;
  }
  const { width, height } = getImageDimensions(value);
  const client = getClient();
  const url = urlBuilder(client)
    .image(value)
    .width(isInline ? 100 : 800)
    .fit("max")
    .auto("format")
    .quality(100)
    .url();
    const sizes = [320, 420, 720, 1024, 1080, 1440, 1920];

    // Calculate the largest width available
    const largestWidth = Math.max(...sizes);
  
    // Generate the sizes string for responsive images
    const sizesString = sizes
      .map((size) => `(max-width: ${size}px) ${size}px`)
      .concat(`${largestWidth}px`)
      .join(', ');
  return (
    <Image
      src={url!}
      alt={value.altText || " "}
      loading="lazy"
      height={height}
      width={width}
      sizes={sizesString}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        // @ts-ignore
        aspectRatio: width / height,
      }}
    />
  );
};

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  unknownType: ({ value, ...props }) => {
    return <DynamicComponent block={value} {...props} />;
  },
  types: {
    customImage: SampleImageComponent,
    button: ({ value }) => <DynamicComponent block={value} />,
  },
  marks: {
    link: ({ children, value }) => {
      return <Link to={value?.href}>{children}</Link>;
    },
  },
};
