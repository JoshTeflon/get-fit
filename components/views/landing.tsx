// import Image from 'next/image';
import Image from 'next/image';

import { tomorrow, dm_sans } from '@/app/layout';
import { Text } from '../interface';

const Landing = () => {
  return (
    <section className="xl:landing-length xl:side-space overflow-hidden">
      <div className="flex flex-col items-center xl:items-start xl:flex-row xl:justify-between space-y-8 xl:space-y-0 pt-10 w-full h-full">
        <div className='mt-0 lg:mt-16 xl:mt-20 text-center xl:text-left'>
          <Text
            as='span'
            className={`${dm_sans.className} font-medium uppercase`}
          >
            keep fit
          </Text>
          <Text
            as='h1'
            size='5xl'
            className={`${tomorrow.className} font-medium uppercase w-max`}
          >
            With The<br />
            Most Sophisticated<br />
            <span className='flex justify-center lg:justify-start space-x-2'>
              <span>Personal{' '}</span>
              <span className='w-fit flex flex-col'>
                Trainer
                <svg
                  height="15"
                  viewBox="0 0 210 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className='w-[6.5rem] sm:w-32 md:w-[9.5rem] xl:w-52 self-end -mt-2 text-primary'
                >
                  <path
                    d="M6.5 8.21143C35.1198 8.21143 74.2448 7.66561 103.5 7.66561C120.117 7.66561 135.883 8.21143 152.5 8.21143C169.188 8.21143 188.272 5.23663 204 7.66561"
                    stroke="currentColor"
                    strokeWidth="11.84"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </Text>
        </div>
        <div className='relative h-full lg:h-[110%] mr-20 lg:mr-0'>
          <div className='relative xl:absolute xl:top-0 xl:right-0 xl:bottom-0 w-[32rem] md:w-[36rem] lg:w-[40rem] h-full min-h-[30rem]'>
            <Image
              src='/landing-frame.png'
              alt="man with dumbells"
              className='w-full h-full'
              fill={true}
              sizes='(max-width: 30rem)'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;