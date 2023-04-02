import { useEffect, useState } from "react";
import type { ImagesData } from "@/types/data.d";

export type UseRefImagesProps = {
  content: string;
  images: ImagesData[];
};

type ConvertedImagesFormat = {
  [key: string]: ImagesData;
};

function useRefImages({ content, images }: UseRefImagesProps) {
  const [refImages, setRefImages] = useState<ConvertedImagesFormat>({});
  const [isProcessing, setIsProcessing] = useState<boolean>(true);

  useEffect(() => {
    const cv: ConvertedImagesFormat = {};
    images
      .filter((d) => d.title.includes(content))
      .map((d) => (cv[d.title] = d));
    setRefImages(cv);
    setIsProcessing(false);
  }, [content, images]);

  return { isProcessing, refImages };
}
export default useRefImages;
