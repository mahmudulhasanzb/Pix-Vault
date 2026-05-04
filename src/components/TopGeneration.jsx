import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async () => {
  const res = await fetch('https://pix-vault-ai.vercel.app/data.json');
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);
  console.log(topPhotos);

  return (
    <div>
      <h1 className="text-2xl font-bold mt-5">Top Generation</h1>
      <div>
        {topPhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGeneration;
