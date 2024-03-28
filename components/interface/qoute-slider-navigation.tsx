import React from 'react';
import { dm_sans } from '@/app/layout';
import { Text } from '../interface';
import { CaretLeft, CaretRight } from '../icons';

interface QouteSliderNavigation {
  currentIdx?: number | `${number}`
  total: number | `${number}`
}

const QouteSliderNavigation: React.FC<QouteSliderNavigation> = ({ currentIdx = 1, total }) => {
  return (
    <div className='flex items-center space-x-10 md:space-x-16'>
      <Text
        as='span'
        size='lg'
        className={`${dm_sans.className} font-bold`}
      >
        <span>{currentIdx}</span>/<span>{total}</span>
      </Text>
      <div className='flex items-center space-x-6 md:space-x-8'>
        <CaretLeft className='w-4' />
        <CaretRight className='w-4' />
      </div>
    </div>
  )
}
export default QouteSliderNavigation;