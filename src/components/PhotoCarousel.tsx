"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Photo {
  id: number;
  title: string;
  image: Array<{
    formats: {
      medium: {
        url: string;
      };
    };
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    centerMode: false, // Disable if causing issues
  centerPadding: '0px', // Adjust padding if needed
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          },
        },
      ],
  };

  return (
    <Slider {...settings}>
      {photos.map((photo) => (
        <div key={photo.id}>
          <Image
            src={`http://localhost:1337${photo.image[0].url}`}
            alt={photo.title || 'Photo'}
            fill={false}
            width={300}
            height={200}
          />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoCarousel;