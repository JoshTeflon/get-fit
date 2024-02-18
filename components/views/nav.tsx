import Image from 'next/image';

import { tomorrow } from '@/app/layout';
import { navItems } from '@/utils/data';
import { Button, Text } from '../interface';

const Nav = () => {
  return (
    <nav className={`${tomorrow.className} pt-12 pb-2 side-space`}>
      <div className='flex items-center justify-between'>
        <div className='relative w-12 h-16 xl:w-16 xl:h-20'>
          <Image
            src='/get-fit.svg'
            alt='GetFit Logo'
            className='w-full h-full'
            fill={true}
            priority
          />
        </div>
        <ul className='uppercase hidden lg:flex items-center space-x-9'>
          {
            navItems?.map((item: string) => (
              <li key={item}>
                <Text className='font-medium' as='span'>
                  {`${item}.`}
                </Text>
              </li>
            ))
          }
        </ul>
        <Button>consult</Button>
      </div>
    </nav>
  );
}

export default Nav