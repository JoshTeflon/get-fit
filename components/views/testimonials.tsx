import { testimonialsHeader, testimonialList } from '@/utils/data';
import { QouteCard, QouteSliderNavigation, SectionContent } from '../interface';
import { QouteContent } from '@/utils/types';

const Testimonials = () => {
  return (
    <section className='bg-text text-theme py-14'>
      <div className='side-space'>
        <div className='max-w-md mb-11 md:mb-12'>
          <SectionContent {...testimonialsHeader} />
        </div>
        {/* <QouteSliderNavigation
          total={5}
        /> */}
        <div className='flex space-x-10 md:space-x-12'>
          {
            testimonialList?.map((i: QouteContent) => {
              return (
                <div
                  key={i.name}
                  className='w-full max-w-md md:max-w-[36rem]'
                >
                  <QouteCard
                    comment={i.comment}
                    name={i.name}
                    imgSrc={i.imgSrc}
                    role={i?.role}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;