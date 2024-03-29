import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import { tomorrow } from '@/utils/fonts';
import { QouteContent } from '@/utils/types';
import { SingleQoute } from '../icons';
import { Text } from '../interface';

interface QouteCardProps extends QouteContent  {
  active?: boolean
  className?: string
}

const QouteCard: React.FC<QouteCardProps> = ({
  comment,
  imgSrc,
  name,
  role,
  active,
  className
}) => {
  return (
    <div className={classnames(className, 'w-full space-y-5 md:space-y-6')}>
      <SingleQoute className='w-10' />
      <div
        className='text-ellipsis line-clamp-6'
      >
        <Text
          as='h3'
          size='2xl'
          className={`${tomorrow.className} text-theme/80 font-medium uppercase !leading-relaxed`}
        >
          {comment}
        </Text>
      </div>
      <div className='flex items-center space-x-4'>
        <Image
          src={imgSrc}
          alt={`${name}-${role}`}
          className='w-20 h-20 rounded-full'
        />
        <div className='capitalize'>
          <Text
            as='h4'
            className='font-semibold mb-0.5'
          >
            {name}
          </Text>
          <Text
            as='p'
            size='sm'
            className='text-theme/70'
          >
            {role}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default QouteCard;