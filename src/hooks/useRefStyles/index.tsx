import { useEffect, useState } from "react";
import type { SatoOrAzuData } from "@/types/data";

type NestedArray<T> = Array<T | NestedArray<T>>;

export type StylesTemplate<> = {
  [key: string]: NestedArray<string>;
};

type ConvertedStylesFormat = Record<string, string>;

function useRefStyles<T>(name: SatoOrAzuData, styles: StylesTemplate) {
  const [refStyles, setRefStyles] = useState<ConvertedStylesFormat>({});
  const [isStylesProcessing, setIsStylesProcessing] = useState<boolean>(true);

  useEffect(() => {
    const cv: ConvertedStylesFormat = {};
    Object.keys(styles).map((key) => {
      cv[key] = styles[key]
        .map((v) =>
          typeof v === "string"
            ? v
            : v.filter((v) => v.includes(name)).join(" ")
        )
        .join(" ");
    });
    setRefStyles(cv);
    setIsStylesProcessing(false);
  }, [name, styles]);

  return { isStylesProcessing, refStyles: refStyles as T };
}
export default useRefStyles;
