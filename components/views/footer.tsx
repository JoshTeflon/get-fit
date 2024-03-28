import Image from 'next/image';

import { tomorrow } from '@/app/layout';
import { footerDetails, socialIcons } from '@/utils/data';
import { IconComponent, TitleContent } from '@/utils/types';
import { Text } from '../interface';

const Footer = () => {
  return (
    <footer className='side-space my-8'>
      <div
        className='flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-5 lg:space-y-0 pt-12 pb-8 lg:py-16 lg:px-4 xl:px-16 border-t-[0.5px] border-b-[0.5px] lg:border-b-0 border-text'
      >
        <div className='relative w-12 h-16'>
          <Image
            src='/get-fit.svg'
            alt='GetFit Footer-Logo'
            className='w-full h-full'
            fill={true}
            priority
          />
        </div>
        <>
          {
            footerDetails?.map((detail: TitleContent) => (
              <div
                key={detail?.title as string}
                className='max-w-[19rem] text-center lg:text-left'
              >
                <Text
                  as='h4'
                  size='lg'
                  className={`${tomorrow.className} font-medium uppercase mb-1`}
                >{detail?.title}</Text>
                <Text
                  as='p'
                  className='text-text/70'
                >{detail?.content}</Text>
              </div>
            ))
          }
        </>
        <div className='flex items-center space-x-3.5'>
          {
            socialIcons?.map((Icon: IconComponent, idx: number) => (
              <div
                key={idx}
                className='bg-text text-theme w-[1.875rem] h-[1.875rem] flex items-center justify-center'
              >
                <Icon />
              </div>
            ))
          }
        </div>
      </div>
      <div className='text-center text-base mt-6 mb-12'>&copy;{new Date().getFullYear()} STAYFIT All Right Reserved.</div>
    </footer>
  );
};

export default Footer;