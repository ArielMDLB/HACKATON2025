export interface CarouselImage {
  id: string;
  imageUrl: string;
  title?: string;
  description?: string;
  altText: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
}

export const getCarouselImages = async (): Promise<CarouselImage[]> => {
  return [
    { 
      id: '1',
      imageUrl: "/images/image.webp", 
      title: "Imagen 1",
      altText: "Imagen 1",
      order: 0,
      isActive: true,
      createdAt: new Date()
    },
    { 
      id: '2',
      imageUrl: "/images/image.webp", 
      title: "Imagen 2",
      altText: "Imagen 2",
      order: 1,
      isActive: true,
      createdAt: new Date()
    },
    { 
      id: '3',
      imageUrl: "/images/image3.png", 
      title: "Imagen 3",
      altText: "Imagen 3",
      order: 2,
      isActive: true,
      createdAt: new Date()
    },
    { 
      id: '4',
      imageUrl: "/images/image4.png", 
      title: "Imagen 4",
      altText: "Imagen 4",
      order: 3,
      isActive: true,
      createdAt: new Date()
    },
    { 
      id: '5',
      imageUrl: "/images/image5.png", 
      title: "Imagen 5",
      altText: "Imagen 5",
      order: 4,
      isActive: true,
      createdAt: new Date()
    },
  ];
};