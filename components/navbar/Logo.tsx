import Link from 'next/link';
import { SiNextdotjs } from 'react-icons/si';
import { Button } from '../ui/button';

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <SiNextdotjs className='w-6 h-6' />
      </Link>
    </Button>
  );
};
export default Logo;
