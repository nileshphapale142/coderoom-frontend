import { PlusSign, ProfileSign } from '../Icons';
import { NavigationList } from './navigationList';

export const Navbar = () => {
  return (
    <nav
      className='fixed top-0 z-[986] w-full transform-none border-b-[0.0625rem] border-solid 
        border-[#e0e0e0] bg-white transition-transform duration-[240ms] ease-navbar-bezier '
    >
      <div className='flex flex-row items-center'>
        <NavigationList />

        {/* <div
          className='flex h-4 w-auto flex-row items-center justify-center 
          pr-[1rem] text-center navbar:mx-4 navbar:my-0'
        ></div> */}

        <div className='flex flex-row items-center justify-end pr-2 navbar:min-w-0'>
          <PlusSign />
          <ProfileSign />
        </div>
      </div>
    </nav>
  );
};
