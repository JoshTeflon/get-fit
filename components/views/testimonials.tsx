import { testimonialsHeader } from '@/utils/data';
import { SectionContent } from '../interface';

const Testimonials = () => {
  return (
    <section className='bg-white text-black py-14'>
      <div className='side-space'>
        <div className='max-w-md'>
          <SectionContent {...testimonialsHeader} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;