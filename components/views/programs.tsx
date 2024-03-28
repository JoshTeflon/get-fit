'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { programsHeader, programsSlider } from '@/utils/data';
import { ImageSlideProps } from '@/utils/types';
import { ImageCard, SectionContent } from '../interface';

import mountains from '@/public/get-fit.png';

const Programs = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray('.card');

    const pin = gsap.to(cards, {
      xPercent: -500,
      ease: 'none',
      scrollTrigger: {
        trigger: '.content__wrapper',
        pin: true,
        scrub: 1,
      }
  })
  return () => {
    {/* A return function for killing the animation on component unmount */ }
    pin.kill();
  };
  }, []);

  return (
    <section className='side-space my-16 relative'>
      {/* <div className='w-60 absolute top-0 bottom-0 left-0 right-0'>
        <Image
          alt="Mountains"
          src={mountains}
          placeholder="blur"
          quality={100}
          // fill
          // sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          className='w-full h-full'
        />
      </div> */}
      <section className='content__wrapper overflow-hidden'>
        <div className='max-w-[22.5rem]'>
          <SectionContent {...programsHeader} />
        </div>
          <div
            className='relative mt-11 w-full h-fit flex flex-nowrap space-x-5'
          >
            {
              programsSlider?.map((i: ImageSlideProps) => (
                <div
                  key={i?.header}
                  className='card min-w-[17rem] md:min-w-[20rem] h-fit'
                >
                  <ImageCard
                    src={i?.src}
                    alt={i?.alt}
                    header={i?.header}
                    desc={i?.desc}
                    className='h-[20rem] md:h-[28rem]'
                  />
                </div>
              ))
            }
          </div>
      </section>
    </section>
  );
};

export default Programs;