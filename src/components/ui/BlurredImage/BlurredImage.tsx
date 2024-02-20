import Image, { ImageProps } from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

interface DynamicBlurProps extends ImageProps {
  src: string;
  alt: string;
}

const getImage = async (filePath: string) => {
  try {
    const buffer = await fs.readFile(filePath);
    const plaiceholder = await getPlaiceholder(buffer);

    return { ...plaiceholder, img: { src: filePath.replace("./public", "") } };
  } catch (error) {
    console.error("Error loading image:", error);
    return null;
  }
};

export const BlurredImage: React.FC<DynamicBlurProps> = async ({
  src,
  alt,
  ...imageProps
}) => {
  const imageData = await getImage(src);

  return (
    <>
      {imageData && (
        <Image
          {...imageData.img}
          {...imageProps}
          alt={alt}
          blurDataURL={imageData.base64}
          placeholder="blur"
        />
      )}
    </>
  );
};
