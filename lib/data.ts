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
      "Tree and shrub planting",
      "Garden bed installation",
      "Sod installation",
      "Mulch installation",
      "Lawn edging",
    ],
  },

  {
    id: "patio-installation",
    name: "Paver Patios",
    mainImageId: "paver-patios-main",
    galleryTag: "patios",
    description:
      "Transform your backyard with a custom patio perfect for outdoor dining and entertaining.",
    fullDescription:
      "Our patio design and installation services create beautiful outdoor living spaces using premium materials like natural stone, pavers, flagstone, and bluestone. We craft patios that seamlessly extend your living space outdoors with attention to drainage, usability, and aesthetic appeal.",
    features: [
      "Custom patio designs",
      "Premium paver options",
      "Natural stone installations",
      "Built-in seating and features",
      "Proper drainage solutions",
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
  {
    id: "retaining-wall-installation",
    name: "Retaining Walls and Boulder Walls",
    mainImageId: "retaining-walls-main",
    galleryTag: "retaining-walls",
    description:
      "Build functional and beautiful walls and structures for your landscape.",
    fullDescription: `Our walls and structures services include designing and constructing retaining walls, stone walls, and boulder walls that add both functionality and aesthetic appeal to your property. Whether for erosion control, decorative purposes, or structural support, we use high-quality materials and expert craftsmanship.`,
    features: [
      "Erosion control solutions",
      "Terraced garden walls",
      "Natural stone options",
      "Segmental block systems",
      "Boulder wall construction",
      "Proper drainage integration",
    ],
  },
  {
    id: "lighting-drainage",
    name: "Outdoor Lighting Solutions",
    mainImageId: "lighting-drainage-main",
    galleryTag: "lighting-drainage",
    description:
      "Illuminate and protect your property with professional lighting and drainage solutions.",
    fullDescription:
      "Our outdoor lighting designs highlight your home's architecture, illuminate pathways for safety, and create evening ambiance in your outdoor spaces. We install energy-efficient LED systems for beauty, security, and functionality.",
    features: [
      "Pathway lighting",
      "LED pathway lighting",
      "Architectural accent lighting",
      "Security lighting",
      "French drains",
      "Catch basins",
      "Grading corrections",
    ],
  },
  {
    id: "fire-pit-outdoor-kitchen",
    name: "Fire Pits & Outdoor Kitchens",
    mainImageId: "firepits-main",
    galleryTag: "outdoor-cooking",
    description:
      "Elevate your backyard BBQs with custom fire pits and fully-equipped outdoor kitchens—perfect for sizzling meals, relaxing nights, and enjoying time outdoors with friends and family.",
    fullDescription:
      "Our fire pit and outdoor kitchen installations create the ultimate backyard entertainment space. We design and build custom cooking and gathering areas using premium materials that withstand the elements while complementing your home's architecture. From simple fire pits to complete outdoor kitchens with grills, countertops, and storage, we bring indoor comfort to your outdoor space.",
    features: [
      "Custom fire pit designs",
      "Built-in grill installations",
      "Outdoor countertop spaces",
      "Built-in seating options",
      "Seating and dining areas",
      "Natural stone construction",
      "Weather-resistant materials",
    ],
  },
  {
    id: "drainage-solutions",
    name: "Yard Drainage Solutions",
    mainImageId: "drainage-main",
    galleryTag: "drainage",
    description:
      "Solve water problems with expert drainage solutions that protect your home and landscape.",
    fullDescription:
      "Our professional drainage systems prevent water damage to your home's foundation, eliminate standing water, and protect your landscape investments. We design and install French drains, catch basins, dry creek beds, and other solutions for effective water management.",
    features: [
      "French drain installation",
      "Catch basin systems",
      "Dry creek bed construction",
      "Landscape grading",
      "Downspout extensions",
      "Erosion control measures",
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
  // {
  //   id: "snow-removal-services",
  //   name: "Snow Removal & Ice Management",
  //   mainImageId: "snow-removal-main",
  //   galleryTag: "snow-removal",
  //   description:
  //     "Reliable residential and commercial snow removal to keep your property safe and accessible all winter.",
  //   fullDescription:
  //     "Our comprehensive snow removal services include plowing, shoveling, salting, and ice management for homes and businesses. We provide prompt, dependable service during winter storms to ensure your property remains accessible and hazard-free.",
  //   features: [
  //     // "24/7 emergency snow removal",
  //     "Commercial parking lot plowing",
  //     "Residential driveway clearing",
  //     "Sidewalk and entryway shoveling",
  //     "Ice management and salt application",
  //   ],
  // },
  // {
  //   id: "stone-installations",
  //   name: "Stone Installations",
  //   mainImageId: "stone-installations-main",
  //   galleryTag: "stone-installations",
  //   description:
  //     "Add natural beauty and durability to your landscape with stone installations.",
  //   fullDescription: `Our stone installation services include flagstone, bluestone, boulder walls, and stone stairs. We create stunning walkways, patios, and structural elements that enhance the aesthetic and functionality of your outdoor space.`,
  //   features: [
  //     "Flagstone and bluestone walkways",
  //     "Stone patios",
  //     "Boulder walls",
  //     "Stone stairs",
  //     "Custom stone designs",
  //     "Durable and low-maintenance",
  //   ],
  // },
  // {
  //   id: "commercial-landscaping",
  //   name: "Commercial Landscaping Services",
  //   mainImageId: "commercial-landscaping-main",
  //   galleryTag: "commercial",
  //   description: "Create attractive, low-maintenance landscapes for your business property.",
  //   fullDescription: "Our commercial landscaping services enhance your business property's appearance, functionality, and value. We provide comprehensive design, installation, and maintenance tailored to commercial properties with attention to accessibility, safety, and curb appeal.",
  //   features: [
  //     "Commercial property design",
  //     "Water-efficient landscaping",
  //     "Seasonal color displays",
  //     "Snow removal services",
  //     "Regular maintenance programs",
  //     "ADA-compliant pathways"
  //   ],
  // },
  // {
  //   id: "residential-landscape-design",
  //   name: "Residential Landscape Design",
  //   mainImageId: "residential-landscape-design-main",
  //   galleryTag: "landscaping",
  //   description:
  //     "Create your dream yard with custom landscape design tailored to your home and lifestyle.",
  //   fullDescription:
  //     "Our professional landscape designers create beautiful, functional outdoor spaces that enhance your property value and reflect your personal style. We combine plants, features, and materials that thrive in our local climate while meeting your specific needs and budget.",
  //   features: [
  //     "Custom landscape design",
  //     "Tree and shrub planting",
  //     "Garden bed installation",
  //     "Sod installation",
  //     "Mulch installation",
  //     "Lawn edging",
  //   ],
  // },
  // {
  //   id: "deck-construction",
  //   name: "Custom Deck Construction",
  //   mainImageId: "deck-construction-main",
  //   galleryTag: "decks",
  //   description:
  //     "Expand your outdoor living space with a custom-designed deck built to last.",
  //   fullDescription:
  //     "Our deck construction services create beautiful, functional outdoor living spaces using premium materials and expert craftsmanship. From simple platforms to multi-level designs with built-in features, we build decks that enhance your lifestyle and property value.",
  //   features: [
  //     "Custom deck designs",
  //     "Composite decking options",
  //     "Cedar and pressure-treated wood",
  //     "Built-in benches and planters",
  //     "Deck lighting integration",
  //     "Professional installation",
  //   ],
  // },
  // {
  //   id: "snow-removal",
  //   name: "Snow Removal & Ice Management",
  //   mainImageId: "snow-removal-main",
  //   galleryTag: "snow-removal",
  //   description:
  //     "Keep your property safe and accessible with professional snow and ice management.",
  //   fullDescription:
  //     "Our winter services provide reliable snow removal and ice management for residential and commercial properties. We offer scheduled service and emergency response to ensure your driveways, parking areas, and walkways remain safe and accessible during winter weather.",
  //   features: [
  //     "Residential driveway clearing",
  //     "Commercial parking lot plowing",
  //     "Sidewalk snow removal",
  //     "Ice prevention treatments",
  //     "24/7 emergency response",
  //     "Seasonal contracts available",
  //   ],
  // },
];
