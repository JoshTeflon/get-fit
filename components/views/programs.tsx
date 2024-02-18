import { programsHeader } from '@/utils/data';
import { SectionContent } from '../interface';

const Programs = () => {
  return (
    <section className='side-space my-16'>
      <div className='max-w-[22.5rem]'>
        <SectionContent {...programsHeader} />
      </div>
    </section>
  );
};

export default Programs;