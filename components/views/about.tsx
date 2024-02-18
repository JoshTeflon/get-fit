import { tomorrow, raleway } from '@/app/layout';
import { TitleContent } from '@/utils/types';
import { aboutContent, aboutStats } from '@/utils/data';
import { SectionContent, Text } from '../interface';

const About = () => {
  return (
    <section className='side-space my-28 flex flex-col lg:flex-row'>
      <div className='lg:w-1/2'></div>
      <div className='lg:w-1/2'>
        <SectionContent {...aboutContent} />
        <div className='flex space-x-7 mt-10'>
          {
            aboutStats?.map((stat: TitleContent, idx: number) => (
              <div key={idx}>
                <Text
                  as='h3'
                  size='5xl'
                  className={`${tomorrow.className} font-medium`}
                >
                  {stat?.title}
                </Text>
                <Text as='p' className={`${raleway.className} text-white/70 font-semibold uppercase`}>
                  {stat?.content}
                </Text>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default About;