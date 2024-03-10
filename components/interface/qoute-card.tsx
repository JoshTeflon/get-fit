import React from 'react';
import classnames from 'classnames';
import { SingleQoute } from '../icons';
import { Text } from '../interface';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface QouteCardProps {
  comment: string
  imgSrc: string | StaticImport
  name: string
  role?: string
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
    <div className={classnames(className, 'w-full flex flex-col items-center md:items-start space-y-5 md:space-y-6')}>
      <SingleQoute className='w-10' />
      <div>
        <Text size='2xl' as='h3'>{ comment }</Text>
      </div>
    </div>
  );
};

export default QouteCard;