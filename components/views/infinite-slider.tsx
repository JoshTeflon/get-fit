import { tomorrow } from '@/utils/fonts';
import { programServices } from '@/utils/data';
import { Text } from '../interface';
import { CrossX } from '../icons';

const infiniteSlider = () => {
  return (
    <div className={`${tomorrow.className} w-full h-[4.5rem] bg-primary flex items-center space-x-5 md:space-x-10 lg:space-x-14 overflow-hidden`}>
      {
        programServices?.map((service: string, index: number) => (
          <div
            className='text-theme flex items-center'
            key={`${service}-${index}`}
          >
            <Text
              className='mr-5 md:mr-10 lg:mr-14 font-semibold uppercase whitespace-nowrap'
              as='span'
              size='xl'
            >
              {service}
            </Text>
            <CrossX />
          </div>
        ))
      }
    </div>
  )
}

export default infiniteSlider;