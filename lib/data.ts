import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { IoMail, IoPhonePortrait, IoTime } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md"; // Import email and phone icons
import { ServiceBase } from "./types";

export const navLinks = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Services",
  },
  {
    name: "Contact",
  },
];

// Target values for the metrics
export const metrics = [
  {
    metric: "Projects Comepleted",
    target: 150,
    duration: 2,
  },
  {
    metric: "Customers Worked With",
    target: 300,
    duration: 2,
  },
  {
    metric: "Years of Experience",
    target: 20,
    duration: 4,
  },
];

export const contactInfo = [
  {
    name: "Time",
    content: "Monday - Friday: 7am - 3pm",
    url: "",
    icon: IoTime,
  },
  {
    name: "Email",
    content: "landscaping.izzy@gmail.com",
    url: "mailto:landscaping.izzy@gmail.com",
    icon: IoMail,
  },
  {
    name: "Phone Number",
    content: "(612) 978-9411",
    url: "tel:6129789411",
    icon: IoPhonePortrait,
  },
];

// Socials data
export const contactAndSocials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/IzzysLandscaping",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/izzys_landscaping/?igsh=NTc4MTIwNjQ2YQ%3D%3D#",
    icon: FaInstagram,
  },
  {
    name: "Email",
    url: "mailto:landscaping.izzy@gmail.com",
    icon: MdEmail,
  },
  {
    name: "Phone",
    url: "tel:6129789411",
    icon: MdPhone,
  },
];

export const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/IzzysLandscaping",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/izzys_landscaping/?igsh=NTc4MTIwNjQ2YQ%3D%3D#",
    icon: FaInstagram,
  },
  {
    name: "Email",
    url: "mailto:landscaping.izzy@gmail.com",
    icon: MdEmail,
  },
];

export const testimonials = [
  {
    clientName: "Luke C.",
    location: "Minnesota",
    review:
      "I hired Izzy's Landscaping & Construction to build a retaining wall and add fill beneath a new garage. Izzy and team did a thorough job with clear attention to detail. The space is solidly constructed with water drainage and durability in mind. He is easy to work with, prompt, available, and has a great team. I highly recommend Izzy to anyone looking for high quality at a reasonable price with zero hassle.",
    rating: 5,
  },
  {
    clientName: "K. Buchberger",
    location: "Minnesota",
    review:
      "We just had the best experience with Izzy's! When we were first looking for quotes he was incredibly responsive, showed up right when he said he would, and worked with us in answering all of our questions to figure out a design in our budget. Then he and his crew showed up to do the project, and absolutely blew us away with their hard work and skill. We were gone on vacation when they finished and he was STILL super quick to respond to all our (my) annoying emails. We highly recommend Izzy and his crew!",
    rating: 5,
  },
  {
    clientName: "Dr. Josey P.",
    location: "Minnesota",
    review:
      "Outstanding customer service, professionalism, work ethic, and outcomes. This company exceeded my expectations. Prices were very reasonable. I would definitely hire Izzys Landscaping for future work. Highly recommended!",
    rating: 5,
  },
  {
    clientName: "Tim W.",
    location: "Minnesota",
    review:
      " I met the owner and he did a fantastic job was super easy to work with and very fair with pricing",
    rating: 5,
  },
];

export const services: ServiceBase[] = [
  {
    id: "landscaping",
    name: "Landscaping",
    mainImageId: "landscaping/landscaping/main",
    galleryTag: "landscaping",
    description:
      "Transform your outdoor space with our expert landscaping services.",
    fullDescription: `Our landscaping services include designing and creating beautiful outdoor spaces tailored to your preferences. From planting trees and shrubs to installing decorative elements, we bring your vision to life.`,
    features: [
      "Custom landscape design",
      "Planting trees and shrubs",
      "Garden bed installation",
      "Seasonal color updates",
      "Outdoor space optimization",
    ],
  },
  {
    id: "hardscaping",
    name: "Hardscaping",
    mainImageId: "landscaping/hardscaping/main",
    galleryTag: "hardscaping",
    description:
      "Enhance your property with durable and stylish hardscaping solutions.",
    fullDescription: `Our hardscaping services include the installation of patios, walkways, and other structural elements that add functionality and beauty to your outdoor space. We use high-quality materials to ensure longevity and aesthetic appeal.`,
    features: [
      "Patio installation",
      "Walkway and pathway design",
      "Retaining walls",
      "Outdoor living spaces",
      "Custom stonework",
    ],
  },
  {
    id: "retaining-walls",
    name: "Retaining Walls",
    mainImageId: "landscaping/retaining-walls/main",
    galleryTag: "retaining-walls",
    description:
      "Build sturdy and attractive retaining walls for your property.",
    fullDescription: `We specialize in designing and constructing retaining walls that prevent soil erosion, manage water runoff, and add visual interest to your landscape. Our walls are built to last and complement your outdoor aesthetic.`,
    features: [
      "Custom wall design",
      "Erosion control",
      "Water runoff management",
      "Decorative stone options",
      "Durable construction",
    ],
  },
  {
    id: "lighting-solutions",
    name: "Lighting Solutions",
    mainImageId: "landscaping/lighting-solutions/main",
    galleryTag: "lighting-solutions",
    description:
      "Illuminate your outdoor space with our professional lighting solutions.",
    fullDescription: `Our lighting solutions enhance the beauty and functionality of your outdoor areas. From pathway lighting to accent lighting, we create a warm and inviting atmosphere for your home.`,
    features: [
      "Pathway lighting",
      "Accent lighting",
      "Security lighting",
      "Energy-efficient options",
      "Custom lighting design",
    ],
  },
  {
    id: "drainage",
    name: "Drainage",
    mainImageId: "landscaping/drainage/main",
    galleryTag: "drainage",
    description: "Solve drainage issues with our expert solutions.",
    fullDescription: `We provide comprehensive drainage solutions to protect your property from water damage. Our services include French drains, catch basins, and grading corrections to ensure proper water flow.`,
    features: [
      "French drain installation",
      "Catch basins",
      "Grading corrections",
      "Water runoff management",
      "Custom drainage plans",
    ],
  },
  {
    id: "paver-patios",
    name: "Paver Patios",
    mainImageId: "landscaping/paver-patios/main",
    galleryTag: "paver-patios",
    description: "Create stunning outdoor living spaces with our paver patios.",
    fullDescription: `Our paver patio services include designing and installing durable, low-maintenance patios that enhance your outdoor living experience. We offer a variety of materials and designs to suit your style.`,
    features: [
      "Custom patio design",
      "Durable materials",
      "Low-maintenance options",
      "Variety of patterns and colors",
      "Professional installation",
    ],
  },
  {
    id: "grading-drainage-correction",
    name: "Grading and Drainage Correction",
    mainImageId: "landscaping/grading-drainage-correction/main",
    galleryTag: "grading-drainage-correction",
    description:
      "Correct grading and drainage issues to protect your property.",
    fullDescription: `We specialize in correcting grading and drainage problems to prevent water damage and improve the functionality of your outdoor space. Our solutions are tailored to your property's needs.`,
    features: [
      "Grading corrections",
      "Drainage system installation",
      "Erosion control",
      "Water runoff management",
      "Custom solutions",
    ],
  },
  {
    id: "draintile-french-drain",
    name: "Draintile French Drain",
    mainImageId: "landscaping/draintile-french-drain/main",
    galleryTag: "draintile-french-drain",
    description: "Install efficient French drains to manage water runoff.",
    fullDescription: `Our French drain installation services ensure proper water drainage and protect your property from water damage. We use high-quality materials and proven techniques for long-lasting results.`,
    features: [
      "French drain installation",
      "Water runoff management",
      "Erosion control",
      "Durable materials",
      "Custom drainage plans",
    ],
  },
  {
    id: "flagstone",
    name: "Flagstone",
    mainImageId: "landscaping/flagstone/main",
    galleryTag: "flagstone",
    description:
      "Add natural beauty to your outdoor space with flagstone installations.",
    fullDescription: `Our flagstone services include designing and installing walkways, patios, and other features that enhance the natural beauty of your property. We offer a variety of colors and patterns to suit your style.`,
    features: [
      "Flagstone walkways",
      "Flagstone patios",
      "Natural stone options",
      "Custom designs",
      "Professional installation",
    ],
  },
  {
    id: "bluestone",
    name: "Bluestone",
    mainImageId: "landscaping/bluestone/main",
    galleryTag: "bluestone",
    description: "Enhance your outdoor space with elegant bluestone features.",
    fullDescription: `Our bluestone services include the installation of patios, walkways, and other features that add a touch of elegance to your property. We use high-quality bluestone for durability and aesthetic appeal.`,
    features: [
      "Bluestone patios",
      "Bluestone walkways",
      "Elegant designs",
      "Durable materials",
      "Custom installations",
    ],
  },
  {
    id: "stone-walls",
    name: "Stone Walls",
    mainImageId: "landscaping/stone-walls/main",
    galleryTag: "stone-walls",
    description:
      "Build beautiful and functional stone walls for your property.",
    fullDescription: `Our stone wall services include designing and constructing walls that add structure and beauty to your landscape. We use a variety of stone types to match your aesthetic preferences.`,
    features: [
      "Custom stone wall design",
      "Decorative options",
      "Functional retaining walls",
      "Durable construction",
      "Variety of stone types",
    ],
  },
  {
    id: "boulder-walls",
    name: "Boulder Walls",
    mainImageId: "landscaping/boulder-walls/main",
    galleryTag: "boulder-walls",
    description: "Create stunning boulder walls for your landscape.",
    fullDescription: `Our boulder wall services include designing and building walls that add a natural, rugged beauty to your property. We use large boulders to create visually striking and durable structures.`,
    features: [
      "Custom boulder wall design",
      "Natural stone options",
      "Durable construction",
      "Erosion control",
      "Unique aesthetic appeal",
    ],
  },
  {
    id: "firepits",
    name: "Firepits",
    mainImageId: "landscaping/firepits/main",
    galleryTag: "firepits",
    description:
      "Add warmth and ambiance to your outdoor space with custom firepits.",
    fullDescription: `Our firepit services include designing and building custom firepits that enhance your outdoor living experience. We offer a variety of materials and styles to suit your preferences.`,
    features: [
      "Custom firepit design",
      "Variety of materials",
      "Gas or wood-burning options",
      "Durable construction",
      "Enhances outdoor ambiance",
    ],
  },
  {
    id: "outdoor-kitchen",
    name: "Outdoor Kitchen",
    mainImageId: "landscaping/outdoor-kitchen/main",
    galleryTag: "outdoor-kitchen",
    description: "Create the ultimate outdoor cooking and dining experience.",
    fullDescription: `Our outdoor kitchen services include designing and building fully functional kitchens that allow you to cook and entertain outdoors. We offer a range of features to suit your needs.`,
    features: [
      "Custom kitchen design",
      "Grill and appliance installation",
      "Countertop and seating options",
      "Durable materials",
      "Enhances outdoor living",
    ],
  },
  {
    id: "planting",
    name: "Planting",
    mainImageId: "landscaping/planting/main",
    galleryTag: "planting",
    description: "Enhance your landscape with professional planting services.",
    fullDescription: `Our planting services include selecting and installing trees, shrubs, and flowers that thrive in your climate. We create beautiful, sustainable landscapes tailored to your preferences.`,
    features: [
      "Tree and shrub planting",
      "Flower bed installation",
      "Seasonal color updates",
      "Sustainable landscaping",
      "Custom plant selection",
    ],
  },
  {
    id: "mulch",
    name: "Mulch",
    mainImageId: "landscaping/mulch/main",
    galleryTag: "mulch",
    description: "Improve your landscape with high-quality mulch installation.",
    fullDescription: `Our mulch services include the installation of mulch to improve soil health, retain moisture, and enhance the appearance of your landscape. We offer a variety of mulch types to suit your needs.`,
    features: [
      "Mulch installation",
      "Variety of mulch types",
      "Soil health improvement",
      "Moisture retention",
      "Weed control",
    ],
  },
  {
    id: "rock",
    name: "Rock",
    mainImageId: "landscaping/rock/main",
    galleryTag: "rock",
    description:
      "Add texture and durability to your landscape with rock installations.",
    fullDescription: `Our rock services include the installation of decorative rocks and stones to enhance the aesthetic and functionality of your outdoor space. We offer a variety of rock types and sizes.`,
    features: [
      "Decorative rock installation",
      "Variety of rock types",
      "Durable and low-maintenance",
      "Erosion control",
      "Custom designs",
    ],
  },
  {
    id: "sod",
    name: "Sod",
    mainImageId: "landscaping/sod/main",
    galleryTag: "sod",
    description:
      "Achieve a lush, green lawn with professional sod installation.",
    fullDescription: `Our sod services include the installation of high-quality sod to create an instant, beautiful lawn. We ensure proper preparation and installation for long-lasting results.`,
    features: [
      "Sod installation",
      "Instant lawn transformation",
      "Proper soil preparation",
      "High-quality sod",
      "Professional installation",
    ],
  },
  {
    id: "edging",
    name: "Edging",
    mainImageId: "landscaping/edging/main",
    galleryTag: "edging",
    description: "Define your landscape with clean, professional edging.",
    fullDescription: `Our edging services include creating clean, defined borders for your lawn, garden beds, and walkways. We use durable materials to ensure long-lasting results.`,
    features: [
      "Lawn edging",
      "Garden bed borders",
      "Walkway edging",
      "Durable materials",
      "Clean, defined lines",
    ],
  },
  {
    id: "excavations",
    name: "Excavations",
    mainImageId: "landscaping/excavations/main",
    galleryTag: "excavations",
    description:
      "Prepare your property for construction or landscaping with our excavation services.",
    fullDescription: `Our excavation services include site preparation, trenching, and grading to ensure your property is ready for construction or landscaping projects. We use professional equipment for precise results.`,
    features: [
      "Site preparation",
      "Trenching",
      "Grading",
      "Professional equipment",
      "Custom excavation plans",
    ],
  },
];
