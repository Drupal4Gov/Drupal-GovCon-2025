import CoreSponsor from './core-sponsor.twig';
import sponsorImage from '../../../assets/images/Default.png';
import './core-sponsor.scss';

export default {
  title: 'Molecules/Core Sponsor',
  args: {
    core_sponsors: Array.from({ length: 3 }, (_, i) => ({
      logo_url: sponsorImage,
      logo_alt: `Training Sponsor Logo ${i + 1}`,
      link: 'https://www.example.com'
    }))
  }
};

const Template = (args) => CoreSponsor(args);

export const Default = Template.bind({});
