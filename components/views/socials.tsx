import { tomorrow } from '@/app/layout';
import { socialsHeader } from '@/utils/data';
import { SectionContent, Text } from '../interface';

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
    </section>
  );
};

export default Socials;