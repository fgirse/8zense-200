"use client"

import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "@/app/content/photoGallery";

const images = IMAGES.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  ),
}));

export default function App() {
  return (
    <div className=" gap-12">
      <h1 className="mb-5 text-[2.333rem] text-yellow-500 text-center">Galllerie</h1>
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
}0