// Third-party
import { FormattedMessage } from 'react-intl';
import { styled } from '@mui/material/styles';

// Assets
// Import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// Icons
import RLEIcon from '../assets/images/RLE Logo.png';
import VCMIcon from '../assets/images/VCM Icon.png';
import SDPIcon from '../assets/images/SDP Icon.png';
import BoMIcon from '../assets/images/BoM Icon.png';
import BenchmarkingIcon from '../assets/images/Benchmarking Icon.png';

// Constant
// Const icons = {
//   IconBrandChrome,
//   IconHelp,
//   IconSitemap
// };

// Define above main component or elsewhere then import.

export interface ISidebarIcon {
  src: string;
  alt: string;
  className?: string;
}

const SidebarIcon = styled('img')(({ theme }) => ({
  height: '22px'
}));

const rleIcon = (props: ISidebarIcon) => <SidebarIcon src={RLEIcon.src} alt="RLE Logo" className="sidebarLogos"></SidebarIcon>;
const vcmIcon = (props: ISidebarIcon) => <SidebarIcon src={VCMIcon.src} alt="VCM Logo" className="sidebarLogos"></SidebarIcon>;
const sdpIcon = (props: ISidebarIcon) => <SidebarIcon src={SDPIcon.src} alt="SDP Logo" className="sidebarLogos"></SidebarIcon>;
const bomIcon = (props: ISidebarIcon) => <SidebarIcon src={BoMIcon.src} alt="BoM Logo" className="sidebarLogos"></SidebarIcon>;
const benchmarkingIcon = (props: ISidebarIcon) => (
  <SidebarIcon src={BenchmarkingIcon.src} alt="Benchmarking Logo" className="sidebarLogos"></SidebarIcon>
);

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'other',
  title: <FormattedMessage id="links" />,
  caption: <FormattedMessage id="links-caption" />,
  type: 'group',
  children: [
    {
      id: 'RLE',
      title: <FormattedMessage id="rle" />,
      caption: <FormattedMessage id="rle-caption" />,
      type: 'item',
      url: 'https://www.rle.international/?lang=en',
      icon: rleIcon,
      breadcrumbs: false
    },
    {
      id: 'VCM',
      // Title: 'VCM',
      title: <FormattedMessage id="vcm" />,
      caption: <FormattedMessage id="vcm-caption" />,
      type: 'item',
      // Url: '/sample-page',
      url: '/VCM',
      icon: vcmIcon,
      breadcrumbs: false
    },
    {
      id: 'SDP',
      // Title: 'SDP',
      title: <FormattedMessage id="sdp" />,
      caption: <FormattedMessage id="sdp-caption" />,
      type: 'item',
      // Url: '/utils/util-color',
      url: 'https://sdp.rle.de/#home',
      // Icon: icons.IconPalette,
      // Icon: '/src/assets/images/SDP Logo.png',
      icon: sdpIcon,
      breadcrumbs: false
    },
    {
      id: 'BoM',
      // Title: 'BoM',
      title: <FormattedMessage id="bom" />,
      caption: <FormattedMessage id="bom-caption" />,
      type: 'item',
      url: '/BoM',
      icon: bomIcon,
      breadcrumbs: false
    },
    {
      id: 'Benchmarking',
      // Title: 'Benchmarking',
      title: <FormattedMessage id="benchmarking" />,
      caption: <FormattedMessage id="benchmarking-caption" />,
      type: 'item',
      url: '/Benchmarking',
      icon: benchmarkingIcon,
      breadcrumbs: false
    }
    // {
    //   Id: 'sample-page',
    //   Title: <FormattedMessage id="sample-page" />,
    //   Type: 'item',
    //   Url: '/sample-page',
    //   Icon: icons.IconBrandChrome,
    //   Breadcrumbs: false
    // },
    // {
    //   Id: 'documentation',
    //   Title: <FormattedMessage id="documentation" />,
    //   Type: 'item',
    //   Url: 'https://codedthemes.gitbook.io/berry/',
    //   Icon: icons.IconHelp,
    //   External: true,
    //   Target: true
    // },
    // {
    //   Id: 'roadmap',
    //   Title: <FormattedMessage id="roadmap" />,
    //   Type: 'item',
    //   Url: 'https://codedthemes.gitbook.io/berry/roadmap',
    //   Icon: icons.IconSitemap,
    //   External: true,
    //   Target: true
    // }
  ]
};

export default other;
