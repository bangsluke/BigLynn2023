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
  id: 'links',
  title: 'links',
  type: 'group',
  children: [
    {
      id: 'event-details',
      title: 'Event Details',
      type: 'item',
      url: '#eventdetails',
      icon: icons.IconFileText,
      breadcrumbs: false
    },
    {
      id: 'faq',
      title: 'FAQ',
      type: 'item',
      url: '#FAQ',
      icon: icons.IconFileText,
      breadcrumbs: false
    },
    {
      id: 'stats',
      title: 'stats',
      type: 'item',
      url: '#stats',
      icon: icons.IconFileReport,
      breadcrumbs: false
    },
    {
      id: 'extra',
      title: 'extra',
      type: 'item',
      url: '#extra',
      icon: icons.IconFileReport,
      breadcrumbs: false
    }
  ]
};

export default pages;
