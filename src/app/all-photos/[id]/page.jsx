import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa6';
import PromptSection from '@/components/PromptSection';

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  const res = await fetch('https://pix-vault-ai.vercel.app/data.json');
  const photos = await res.json();

  const expectedPhoto = photos.find(photo => photo.id == id);

  if (!expectedPhoto) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Photo Not Found</h2>
        <Link href="/all-photos">
          <Button variant="outline">Back to Gallery</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 md:py-12">
      <Card className="border-none shadow-xl rounded-2xl overflow-hidden bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Image Area with hover & shadow */}
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
              <Image
                src={expectedPhoto.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={expectedPhoto.title}
                className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                priority
              />
              <Chip 
                size="sm" 
                className="absolute right-3 top-3 font-semibold select-none bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-md backdrop-blur-sm border-none"
              >
                {expectedPhoto.category}
              </Chip>
            </div>
          </div>

          {/* Right Column: Detailed Content Information */}
          <div className="md:col-span-7 flex flex-col justify-between h-full gap-6">
            <div className="flex flex-col gap-6">
              
              
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent mb-1">
                  {expectedPhoto.title}
                </h1>
                <p className="text-sm text-zinc-400 font-medium select-none">
                  AI Generated Art via PixVault
                </p>
              </div>

              {/* Prompt Block Callout (Now Client Component with Copy feature) */}
              <PromptSection prompt={expectedPhoto.prompt} />

              
              <div className="flex items-center gap-3 bg-zinc-50/80 dark:bg-zinc-800/40 p-3 rounded-xl border border-zinc-100/80 dark:border-zinc-800/60">
                <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  Best worked with:
                </span>
                <Chip size="sm" className="font-extrabold select-none bg-zinc-200/80 text-zinc-800 dark:bg-zinc-700/80 dark:text-zinc-200 border border-zinc-300/40 dark:border-zinc-600/40">
                  {expectedPhoto.model}
                </Chip>
              </div>

              {/* Stats Block: Likes and Downloads in split layout */}
              <div className="grid grid-cols-2 gap-4 items-center bg-zinc-50/80 dark:bg-zinc-800/40 p-4 rounded-xl border border-zinc-100/80 dark:border-zinc-800/60 select-none">
                <div className="flex items-center justify-center gap-3 text-rose-500">
                  <FaHeart className="text-xl " />
                  <div className="flex flex-col">
                    <span className="font-extrabold text-lg leading-none">
                      {expectedPhoto.likes}
                    </span>
                    <span className="text-xs font-medium text-zinc-400">
                      likes
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 text-cyan-600">
                  <BiDownload className="text-2xl" />
                  <div className="flex flex-col">
                    <span className="font-extrabold text-lg leading-none">
                      {expectedPhoto.downloads}
                    </span>
                    <span className="text-xs font-medium text-zinc-400">
                      downloads
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Back Button Action Footer */}
            <div className="mt-4 md:mt-0 pt-4 flex gap-4">
              <Link href={`/all-photos`} className="flex-1">
                <Button 
                  variant="bordered" 
                  className="w-full h-11 font-bold rounded-xl border border-zinc-200 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 dark:border-zinc-700 transition-all cursor-pointer select-none"
                >
                  Back to All Photos
                </Button>
              </Link>
              <Link href={`/`} className="flex-1">
                <Button 
                  className="w-full h-11 font-bold rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-lg cursor-pointer select-none"
                >
                  Return to Home
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </Card>
    </div>
  );
};

export default PhotoDetailsPage;
