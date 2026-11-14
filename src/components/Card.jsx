import { useState } from "react";

export default function Card(props) {
  const { title, description, price, images, imgPlaceH } = props.data;

  const [srcImg, setSrcImg] = useState(images[0]);

  const handleImgError = () => {
    setSrcImg(imgPlaceH);
  };

  return (
    <div className='w-full h-80 flex flex-col gap-3 p-2 bg-emerald-50 rounded-xl'>
      <div className='group w-full h-2/3 rounded-lg overflow-hidden'>
        <img
          className='w-full h-full border-none group-hover:scale-125 group-hover:transition-all group-hover:duration-500 ease-linear'
          src={srcImg}
          alt={title.split(" ").join("-")}
          onError={handleImgError}
        />
      </div>
      <div className='w-full h-1/3 px-2 flex flex-col justify-between text-emerald-950'>
        <div className='flex flex-col'>
          <p className='md:text-base font-medium truncate'>{title}</p>
          <p className='text-sm line-clamp-2'>{description}</p>
        </div>
        <div className='flex flex-row-reverse'>
          <p className='text-lg font-medium'>$ {price}</p>
        </div>
      </div>
    </div>
  );
}
