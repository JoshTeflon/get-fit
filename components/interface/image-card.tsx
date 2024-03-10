import React from 'react';
import Image, { ImageProps } from 'next/image';
import classnames from 'classnames';
import { Text } from '.';
import { raleway, tomorrow } from '@/app/layout';

interface ImageCardProps extends ImageProps {
  header?: string
  desc?: string
  className?: string
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, width, height, header, desc, className, ...rest }) => {
  return (
    <div
      className='w-full h-full'
    >
      <Image
        className={classnames(className, 'w-full h-full')}
        src={src}
        alt={alt}
        width={width}
        height={width}
        {...rest}
      />
      {
        (header || desc) ?
        <div>
          {
            header &&
            <Text className={`${tomorrow.className} uppercase font-medium mt-4 mb-2`} as='h4' size='3xl'>
              {header}
            </Text>
          }
          {
            desc &&
            <Text className={`${raleway.className} text-text/80`} as='p'>
              {desc}
            </Text>
          }
        </div>
        : null
      }
    </div>
  )
}

export default ImageCard;