import Image from 'next/image';
import BLLogo from '../../../public/assets/images/Big-Lynn-Logo.svg';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  return <Image src={BLLogo} alt="Big Lynn 2023" height="200" />;
  // Return null;
};

export default Logo;
