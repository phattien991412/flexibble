'use client'


import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    fill?: boolean;
}

const BlurredImage = ({src, alt, width, height, className, fill} : Props) => {
  const blurredImageDivRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const loaded = () => {
    blurredImageDivRef.current!.classList.add("loaded");
  };

  useEffect(() => {
    const img = imgRef.current!;

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }

    return () => {
      img.removeEventListener("load", loaded);
    };
  }, []);

  return (
    <div className="blur-img" ref={blurredImageDivRef}>
      <Image className={className} width={width} height={height} src={src} alt={alt} ref={imgRef} fill={fill ? fill : false}/>
    </div>
  );
};

export default BlurredImage;
