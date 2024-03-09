import { ImageCard, SectionContent } from '../interface';
import { programsHeader, programsSlider } from '@/utils/data';
import { ImageSlideProps } from '@/utils/types';

const Programs = () => {
  return (
    <section className='side-space my-16'>
      <div className='max-w-[22.5rem]'>
        <SectionContent {...programsHeader} />
      </div>
      <div className='flex space-x-5 mt-11'>
        {
          programsSlider?.map((i: ImageSlideProps) => (
            <ImageCard
              key={i?.header}
              src={i?.src}
              alt={i?.alt}
              header={i?.header}
              desc={i?.desc}
              className='w-[21rem] h-[23rem]'
            />
          ))
        }
      </div>
    </section>
  );
};

export default Programs;