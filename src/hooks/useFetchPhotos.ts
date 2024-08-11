// import { useState, useCallback } from 'react';
// import { Photo } from '../types';

// export const useFetchPhotos = (customerId: number) => {
//   const [photos, setPhotos] = useState<Photo[]>([]);

//   const fetchPhotos = useCallback(async () => {
    
//     const data = await response.json();
//     setPhotos(data.map((photo: any) => ({ url: photo.urls.small })));
//     console.log(data);
//   }, [customerId]);

//   return [photos, fetchPhotos] as const;
// };



// const response = await fetch(`https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9`);
import { useState, useCallback, useEffect } from 'react';

interface Photo {
  url: string;
}

export const useFetchPhotos = (customerId: number) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=1LoyPK-eYScj8IU6XUHM_fB0R33tkrTIOFvALlnVfjk&count=9`
      );
      console.log(response)
      const data = await response.json();
      setPhotos(data.map((photo: any) => ({ url: photo.urls.small })));
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }, [customerId]);

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, [fetchPhotos]);

  return photos;
};
