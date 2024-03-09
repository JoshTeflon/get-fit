import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import GymGuy from '@/assets/HerculesRectangle.png';

interface ClippedImageProps {
  className?: string
}

const ClippedImage: React.FC<ClippedImageProps> = ({ className }) => {
  return (
    <div
      className={classnames(
        className,
        'relative ml-4 lg:mt-4 w-full max-w-[19.25rem] md:max-w-[23.25rem] h-[23.25rem] md:h-[29.5rem] isolate'
      )}
    >
      <div className='image-clip'>
        <Image
          className='w-full h-full'
          src={GymGuy}
          alt='gym guy'
        />
      </div>
      <div className='image-border-clip'></div>
    </div>
  )
};

export default ClippedImage;