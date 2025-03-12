import announcementComponent from './announcement-listing-demo.twig';
import data from './announcement-data.yml';

export default {
  title: "Organisms/Announcement Listing",
  argTypes: {
    announcements: {
      control: "object",
      description: "List of announcements to display",
      defaultValue: data.announcements,
    },
    allAnnouncement: {
      control: "object",
      description: "List of All Announcement",
      defaultValue: data.viewAnnouncement,
    },
  },
};

const Template = (args) => announcementComponent(args);

export const Default = Template.bind({});
Default.args = {
  announcements: data.announcements,
  allAnnouncement: data.viewAnnouncement
};
