import { testimonialsHeader } from '@/utils/data';
import { QouteCard, SectionContent } from '../interface';

const Testimonials = () => {
  return (
    <section className='bg-text text-theme py-14'>
      <div className='side-space'>
        <div className='max-w-md'>
          <SectionContent {...testimonialsHeader} />
        </div>
        <div>
          {/* <QouteCard /> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;