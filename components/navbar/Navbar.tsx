import NavSearch from './NavSearch';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:item-center flex-wrap gap-4 py-8'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center'>
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
