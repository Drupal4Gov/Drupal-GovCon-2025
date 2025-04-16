import headerTwig from './header.twig';
import './header.js';
import defaultLogo from '../../../logo.svg';
import useraccount_data from '@molecules/user-account/user-account.yml';
import mainmenu_data from '@molecules/main-menu/main-menu.yml';
import sponsorImage1 from '../../../assets/images/Logo1.png';
import sponsorImage2 from '../../../assets/images/Logo2.jpg';
import sponsorImage3 from '../../../assets/images/Logo3.jpg';

export default {
  title: 'Organisms/Header',
  argTypes: {
    menu_items: { control: 'object' },
    core_sponsors: { control: 'object' },
  },
};

const Template = (args) => headerTwig(args);

export const Default = Template.bind({});
Default.args = {
  src: defaultLogo,
  alt: 'Drupal GovCon Logo',
  useraccount_menu: useraccount_data.menu__items,
  menuItems: mainmenu_data.menu__items,
  core_sponsors: [
    {
      logo_url: sponsorImage1, 
      logo_alt: 'Training Sponsor Logo 1',
      link: 'https://www.example.com',
    },
    {
      logo_url: sponsorImage2, 
      logo_alt: 'Training Sponsor Logo 2',
      link: 'https://www.example.com',
    },
    {
      logo_url: sponsorImage3, 
      logo_alt: 'Training Sponsor Logo 3',
      link: 'https://www.example.com',
    }
  ]
};
