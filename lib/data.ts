export const navLinks = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Services',
  },
  {
    name: 'Contact',
  },
];

// Target values for the metrics
export const metrics = [
  {
    metric: 'Projects Comepleted',
    target: 150,
    duration: 2,
  },
  {
    metric: 'Customers Worked With',
    target: 300,
    duration: 2,
  },
  {
    metric: 'Years of Experience',
    target: 20,
    duration: 4,
  },
];

import { FaInstagram, FaFacebook } from 'react-icons/fa6';

import { IoMail, IoPhonePortrait, IoTime } from 'react-icons/io5';

export const contactInfo = [
  {
    name: 'Time',
    content: ' Monday - Friday: 7am - 3pm',
    url: '',
    icon: IoTime,
  },
  {
    name: 'Email',
    content: 'landscaping.izzy@gmail.com',
    url: 'mailto:landscaping.izzy@gmail.com',
    icon: IoMail,
  },
  {
    name: 'Phone Number',
    content: '(612) 978-9411',
    url: 'tel:6129789411',
    icon: IoPhonePortrait,
  },
];

export const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/IzzysLandscaping',
    icon: FaFacebook,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/izzys_landscaping/?igsh=NTc4MTIwNjQ2YQ%3D%3D#',
    icon: FaInstagram,
  },
];

export const services = [
  {
    name: 'Landscaping',
    url: '/assets/LandscapingExample.png',
  },
  {
    name: 'Hardscaping',
    url: '/assets/HardscapingExample.png',
  },
  {
    name: 'Retaining Walls',
    url: '/assets/RetainingWallsExample.png',
  },
  {
    name: 'Irrigation',
    url: '/assets/IrrigationExample.png',
  },
  {
    name: 'Lighting Solutions',
    url: '/assets/LightingSolutionsExample.png',
  },
  {
    name: 'Drainage',
    url: '/assets/PatioExample.png',
  },
];

export const testimonials = [
  {
    clientName: 'Luke C.',
    location: 'Minnesota',
    review:
      "I hired Izzy's Landscaping & Construction to build a retaining wall and add fill beneath a new garage. Izzy and team did a thorough job with clear attention to detail. The space is solidly constructed with water drainage and durability in mind. He is easy to work with, prompt, available, and has a great team. I highly recommend Izzy to anyone looking for high quality at a reasonable price with zero hassle.",
    rating: 5,
  },
  {
    clientName: 'K. Buchberger',
    location: 'Minnesota',
    review:
      "We just had the best experience with Izzy's! When we were first looking for quotes he was incredibly responsive, showed up right when he said he would, and worked with us in answering all of our questions to figure out a design in our budget. Then he and his crew showed up to do the project, and absolutely blew us away with their hard work and skill. We were gone on vacation when they finished and he was STILL super quick to respond to all our (my) annoying emails. We highly recommend Izzy and his crew!",
    rating: 5,
  },
  {
    clientName: 'Dr. Josey P.',
    location: 'Minnesota',
    review:
      'Outstanding customer service, professionalism, work ethic, and outcomes. This company exceeded my expectations. Prices were very reasonable. I would definitely hire Izzys Landscaping for future work. Highly recommended!',
    rating: 5,
  },
  {
    clientName: 'Tim W.',
    location: 'Minnesota',
    review:
      ' I met the owner and he did a fantastic job was super easy to work with and very fair with pricing',
    rating: 5,
  },
];
