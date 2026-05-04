import PhotoCard from '@/components/PhotoCard'
import React from 'react'

const AllPhotosPage = async () => {
  const res = await fetch("https://pix-vault-ai.vercel.app/data.json")
  const allPhotos = await res.json()

  return (
    <div>
      <h1 className='text-2xl font-bold'>All Photos</h1>

      <div className="grid grid-cols-4">
        {allPhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default AllPhotosPage