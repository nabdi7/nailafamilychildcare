export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryCategory {
  title: string;
  description: string;
  images: GalleryImage[];
}

export const heroContent = {
  badge: "Capturing Beautiful Moments!",
  title: "Our Gallery",
  titleHighlight: "Gallery",
  description: "Take a peek into the daily joy at our childcare",
};

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Our Spaces",
    description: "Engaging educational moments",
    images: [
      {
        src: "/img1.jpg",
        alt: "Our Spaces",
        width: 600,
        height: 400,
      },
      {
        src: "/img2.jpg",
        alt: "Our Spaces",
        width: 600,
        height: 400,
      },
      {
        src: "/img3.jpg",
        alt: "Our Spaces",
        width: 600,
        height: 400,
      },
      {
        src: "/img5.jpg",
        alt: "Our Spaces",
        width: 600,
        height: 400,
      },
      {
        src: "/img6.jpg",
        alt: "Our Spaces",
        width: 600,
        height: 400,
      },
    ],
  },
];
