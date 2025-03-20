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
    target: 180,
    duration: 2,
  },
  {
    metric: "Customers Worked With",
    target: 150,
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

// Socials and contact data
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
    mainImageId: "landscaping-main",
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
    mainImageId: "hardscaping-main",
    galleryTag: "hardscaping",
    description:
      "Enhance your property with durable and stylish hardscaping solutions.",
    fullDescription: `Our hardscaping services include the installation of patios, walkways, retaining walls, and other structural elements that add functionality and beauty to your outdoor space. We use high-quality materials to ensure longevity and aesthetic appeal.`,
    features: [
      "Patio installation",
      "Walkway and pathway design",
      "Retaining walls",
      "Outdoor living spaces",
      "Custom stonework",
    ],
  },
  {
    id: "stone-installations",
    name: "Stone Installations",
    mainImageId: "stone-installations-main",
    galleryTag: "stone-installations",
    description:
      "Add natural beauty and durability to your landscape with stone installations.",
    fullDescription: `Our stone installation services include flagstone, bluestone, boulder walls, and stone stairs. We create stunning walkways, patios, and structural elements that enhance the aesthetic and functionality of your outdoor space.`,
    features: [
      "Flagstone and bluestone walkways",
      "Stone patios",
      "Boulder walls",
      "Stone stairs",
      "Custom stone designs",
      "Durable and low-maintenance",
    ],
  },
  {
    id: "walls-structures",
    name: "Walls & Structures",
    mainImageId: "walls-structures-main",
    galleryTag: "walls-structures",
    description:
      "Build functional and beautiful walls and structures for your landscape.",
    fullDescription: `Our walls and structures services include designing and constructing retaining walls, stone walls, and boulder walls that add both functionality and aesthetic appeal to your property. Whether for erosion control, decorative purposes, or structural support, we use high-quality materials and expert craftsmanship.`,
    features: [
      "Retaining walls for erosion control",
      "Decorative stone walls",
      "Boulder walls for a natural look",
      "Custom designs to match your landscape",
      "Durable and long-lasting construction",
    ],
  },
  {
    id: "lighting-drainage",
    name: "Lighting & Drainage",
    mainImageId: "lighting-drainage-main",
    galleryTag: "lighting-drainage",
    description:
      "Illuminate and protect your property with professional lighting and drainage solutions.",
    fullDescription: `We provide lighting solutions to enhance the beauty and safety of your outdoor spaces, as well as drainage systems to manage water runoff and prevent erosion.`,
    features: [
      "Pathway and accent lighting",
      "Security lighting",
      "French drains",
      "Catch basins",
      "Grading corrections",
    ],
  },
  {
    id: "lawn-garden-care",
    name: "Lawn & Garden Care",
    mainImageId: "lawn-garden-care-main",
    galleryTag: "lawn-garden-care",
    description:
      "Maintain a lush, healthy lawn and garden with our expert care services.",
    fullDescription: `Our lawn and garden care services include sod installation, mulching, edging, and planting to keep your outdoor space vibrant and well-maintained.`,
    features: [
      "Sod installation",
      "Mulch installation",
      "Lawn edging",
      "Tree and shrub planting",
      "Seasonal maintenance",
    ],
  },
  {
    id: "outdoor-living",
    name: "Outdoor Living",
    mainImageId: "outdoor-living-main",
    galleryTag: "outdoor-living",
    description:
      "Create the ultimate outdoor living experience with custom features.",
    fullDescription: `Our outdoor living services include designing and building firepits, outdoor kitchens, and seating areas that transform your backyard into a functional and inviting space.`,
    features: [
      "Custom firepits",
      "Outdoor kitchens",
      "Seating and dining areas",
      "Durable materials",
      "Enhances outdoor ambiance",
    ],
  },
  {
    id: "excavation-site-prep",
    name: "Excavation & Site Prep",
    mainImageId: "excavation-site-prep-main",
    galleryTag: "excavation-site-prep",
    description:
      "Prepare your property for construction or landscaping with professional excavation services.",
    fullDescription: `Our excavation services include site preparation, trenching, and grading to ensure your property is ready for construction or landscaping projects. We use professional equipment for precise results.`,
    features: [
      "Site preparation",
      "Trenching",
      "Grading",
      "Custom excavation plans",
      "Professional equipment",
    ],
  },
  {
    id: "driveways-pathways",
    name: "Driveways & Pathways",
    mainImageId: "driveways-pathways-main",
    galleryTag: "driveways-pathways",
    description:
      "Enhance accessibility and curb appeal with durable driveways and pathways.",
    fullDescription: `We design and install driveways and pathways using high-quality materials like pavers, flagstone, and bluestone to create functional and visually appealing entryways.`,
    features: [
      "Custom driveway design",
      "Pathway installation",
      "Paver and stone options",
      "Durable construction",
      "Professional installation",
    ],
  },
];
