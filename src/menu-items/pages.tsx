// Third-party
import { FormattedMessage } from 'react-intl';

// Assets
// Import { IconBug } from '@tabler/icons';
import { IconFileText, IconFileReport } from '@tabler/icons';

// Constant
const icons = {
  IconFileText,
  IconFileReport
  // IconBug
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: <FormattedMessage id="pages" />,
  caption: <FormattedMessage id="pages-caption" />,
  type: 'group',
  children: [
    {
      id: 'inputs',
      // Title: 'Inputs',
      title: <FormattedMessage id="inputs" />,
      type: 'item',
      // Type: 'collapse',
      url: '/inputs',
      icon: icons.IconFileText,
      breadcrumbs: false
    },
    {
      id: 'results',
      // Title: 'Results',
      title: <FormattedMessage id="results" />,
      type: 'item',
      // Type: 'collapse',
      url: '/results',
      icon: icons.IconFileReport,
      breadcrumbs: false
    }
    // {
    //   Id: 'maintenance',
    //   Title: <FormattedMessage id="maintenance" />,
    //   Type: 'collapse',
    //   Icon: icons.IconBug,
    //   Children: [
    //     {
    //       Id: 'error',
    //       Title: <FormattedMessage id="error-404" />,
    //       Type: 'item',
    //       Url: '/pages/maintenance/error',
    //       Target: true
    //     },
    //     {
    //       Id: 'coming-soon',
    //       Title: <FormattedMessage id="coming-soon" />,
    //       Type: 'collapse',
    //       Children: [
    //         {
    //           Id: 'coming-soon1',
    //           Title: (
    //             <>
    //               <FormattedMessage id="coming-soon" /> 01
    //             </>
    //           ),
    //           Type: 'item',
    //           Url: '/pages/maintenance/coming-soon/coming-soon1',
    //           Target: true
    //         },
    //         {
    //           Id: 'coming-soon2',
    //           Title: (
    //             <>
    //               <FormattedMessage id="coming-soon" /> 02
    //             </>
    //           ),
    //           Type: 'item',
    //           Url: '/pages/maintenance/coming-soon/coming-soon2',
    //           Target: true
    //         }
    //       ]
    //     },
    //     {
    //       Id: 'under-construction',
    //       Title: <FormattedMessage id="under-construction" />,
    //       Type: 'item',
    //       Url: '/pages/maintenance/under-construction',
    //       Target: true
    //     }
    //   ]
    // }
  ]
};

export default pages;
