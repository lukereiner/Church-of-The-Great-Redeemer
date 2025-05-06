"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Photo {
  id: number;
  title: string;
  image: Array<{
    url: string;
  }>;
}

const PhotoCarousel: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch('http://localhost:1337/api/photos?populate=image');
        const data = await response.json();
        setPhotos(data.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }
    fetchPhotos();
  }, []);

  return (
    <div> 
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={3000} // Adjust the speed of auto cycle
        dynamicHeight={true}
      >
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image
              src={`http://localhost:1337${photo.image[0].url}`}
              alt={photo.title || 'Photo'}
              fill={false}
              width={600}
              height={800}
              quality={100}
              style={{borderRadius: '8px'}}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;