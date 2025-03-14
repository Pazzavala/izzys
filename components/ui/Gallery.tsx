"use client";

import React, { useState } from "react";
import Image from "next/image";
import { servicesPhotos } from "@/lib/data";

import {
  RenderImageContext,
  RenderImageProps,
  ColumnsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox"; // or any other lightbox library
import "yet-another-react-lightbox/styles.css";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <ColumnsPhotoAlbum
        photos={servicesPhotos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
        onClick={({ index }) => setIndex(index)}
        //   columns={6}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={servicesPhotos}
      />
    </>
  );
}
