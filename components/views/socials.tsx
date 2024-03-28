import { tomorrow } from '@/utils/fonts';
import { socialsHeader, socialsSlider } from '@/utils/data';
import { ImageSlideProps } from '@/utils/types';
import { ImageCard, SectionContent, Text } from '../interface';

const Socials = () => {
  return (
    <section className='side-space my-16'>
      <div className={`${tomorrow.className} flex justify-end`}>
        <Text
          as='span'
          size='4xl'
          className='text-primary font-medium uppercase'
        >
          @stayfit
        </Text>
      </div>
      <div className='max-w-[30.5rem] -mt-8'>
        <SectionContent {...socialsHeader} />
      </div>
      <div className='flex space-x-5 mt-9'>
        {
          socialsSlider?.map((i: ImageSlideProps) => (
            <ImageCard
              key={i?.alt}
              src={i?.src}
              alt={i?.alt}
              className='w-72 h-[17rem]'
            />
          ))
        }
      </div>
    </section>
  );
};

export default Socials;