import Image from 'next/image';
import { tomorrow, dm_sans } from '@/app/layout';

import { Text } from '../interface';

const Landing = () => {
  return (
    <section className="landing-length side-space">
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between py-10 w-full h-full">
        <div className='mt-12 lg:mt-16 xl:mt-20 text-center lg:text-left'>
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
                  className='w-[6.5rem] sm:w-32 md:w-[9.5rem] xl:w-52 self-end -mt-2'
                >
                  <path
                    d="M6.5 8.21143C35.1198 8.21143 74.2448 7.66561 103.5 7.66561C120.117 7.66561 135.883 8.21143 152.5 8.21143C169.188 8.21143 188.272 5.23663 204 7.66561"
                    stroke="#D8FF09"
                    strokeWidth="11.84"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </Text>
        </div>
        {/* <div className='relative h-full'>
          <div className='absolute -top-4 right-0 w-[30rem] h-full'>
            <Image
              src='/pexels-jan-valle.png'
              alt="man with dumbells"
              className='w-full h-full'
              // width={500}
              // height={500}
              fill={true}
              priority
            />
          </div>
          <svg width="541" height="420" viewBox="0 0 541 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M115.263 1L0.316528 418.764L0.31658 419.266H541V418.764H0.835139L115.746 1.13264L115.263 1Z" fill="#D8FF09"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M165.103 1.02856L62.0281 375.647L62.0291 375.647V376.149H541V375.647H62.5501L165.589 1.16209L165.103 1.02856Z" fill="#D8FF09" fill-opacity="0.8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M123.915 335.907L123.915 335.907L123.915 335.907V336.402H541V335.907H124.436L216.544 1.14974L216.059 1.01636L123.915 335.907Z" fill="#D8FF09" fill-opacity="0.7"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M182.529 296.441H541V296.93H182.007V296.441H182.008L263.277 1.07617L263.762 1.20964L182.529 296.441Z" fill="#D8FF09" fill-opacity="0.6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M308.358 1.09863L237.852 257.345L237.851 257.345V257.831H541V257.345H238.377L308.846 1.23288L308.358 1.09863Z" fill="#D8FF09" fill-opacity="0.5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M291.527 217.626H541V218.107H291V217.626H291.001L350.633 0.898926L351.122 1.03354L291.527 217.626Z" fill="#D8FF09" fill-opacity="0.4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M399.328 1.09033L349.001 184L349.001 184H349.001V184.451H541V184H349.518L399.809 1.22265L399.328 1.09033Z" fill="#D8FF09" fill-opacity="0.3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M438.19 1.05249L396.658 152L396.658 152V152.433H541V152H397.178L438.674 1.18563L438.19 1.05249Z" fill="#D8FF09" fill-opacity="0.2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M483.51 1.14014L451.001 119.29L451.002 119.29H451.001V119.677H541V119.29H451.522L483.994 1.27337L483.51 1.14014Z" fill="#D8FF09" fill-opacity="0.1"/>
          </svg>
        </div> */}
      </div>
    </section>
  );
}

export default Landing;