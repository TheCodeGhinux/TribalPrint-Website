import { brochure, businessCard, catalog, catalogLight, choose, chooseLight, corelDrawIcon, envelope, flexBanner, flyer, grid, idCard, illustratorIcon, mug, notepad, paperBag, pdfIcon, pen, photoShop, rollupBanner, rollupBannerSmall, staple, tShirt, time, upload, uploadLight, waterBottle, waterBottle2, xBanner } from "../Assets";

const NavLinks = [
  {
    id: 1,
    to: "/",
    title: "",
  },  
  {
      id: 2,
      to: "/all-products",
      title: "All Products",
    },
    {
      id: 3,
      to: "/deals",
      title: "Deals",
    },
    {
      id: 4,
      to: "/marker-corner",
      title: "Marker's corner",
    },
    {
      id: 5,
      to: "/faqs",
      title: "FAQS",
    },
  ];


const ProductDetails = [
  {
    id: 1,
    productImage: tShirt,
    productName: "T-shirt",
    price: "₦5,000",
    quantity: "per 1"
  },
  {
    id: 2,
    productImage: notepad,
    productName: "A5 Notepad",
    price: "₦38,000",
    quantity: "per 50"
  },
  {
    id: 3,
    productImage: businessCard,
    productName: "A4 Stitched Brochure",
    price: "₦9,000",
    quantity: "per 100"
  },
  {
    id: 4,
    productImage: mug,
    productName: "Simple Mug",
    price: "₦3,000",
    quantity: "per 1"
  },
  {
    id: 5,
    productImage: paperBag,
    productName: "A4 Paper Bag",
    price: "₦250,000",
    quantity: "per 100"
  },
  {
    id: 6,
    productImage: pen,
    productName: "Pen",
    price: "₦250,000",
    quantity: "per 100"
  },
  {
    id: 7,
    productImage: rollupBanner,
    productName: "Rollup Banner (Big Base)",
    price: "₦32,000",
    quantity: "per 1"
  },
  {
    id: 8,
    productImage: flyer,
    productName: "A5 Flyer (One Sided)",
    price: "₦250,000",
    quantity: "per 100"
  },
  {
    id: 9,
    productImage: brochure,
    productName: "A4 Stitched Brochure",
    price: "₦250,000",
    quantity: "per 100"
  },
  {
    id: 10,
    productImage: idCard,
    productName: "Plastic ID Card",
    price: "₦2,000",
    quantity: "per 1"
  },
  {
    id: 11,
    productImage: envelope,
    productName: "Dl Envelope",
    price: "₦250,000",
    quantity: "per 100"
  },
  {
    id: 12,
    productImage: flexBanner,
    productName: "Flex Banner (9x8 feet)",
    price: "₦250,000",
    quantity: "per 1"
  },

]

const BannerData = [
  {
    id: 1,
    to: "/all-products/banner/upload",
    productImage: flexBanner,
    productName: "Flex Banner Large 7ft x 3ft",
    price: "N13,000",
    quantity: "per 100",
    content: "Our custom size flex banners are the perfect way to grab attention and promote your message with high-quality printing and a durable, weather-resistant material.",
  },
  {
    id: 2,
    to: "/all-products/banner/upload",
    productImage: flexBanner,
    productName: "Flex Banner Custom Size",
    price: "N5,000",
    quantity: "per 100",
    content: "Our custom size flex banners are the perfect way to grab attention and promote your message with high-quality printing and a durable, weather-resistant material.",
  },
  {
    id: 3,
    to: "/all-products/banner/upload",
    productImage: rollupBanner,
    productName: "Rollup Banner Big Base",
    price: "N32,000",
    quantity: "per 100",
    content: "Get noticed on the go with our big base rollup banner, featuring high-quality printing and a lightweight, portable design that's perfect for trade shows, events, and more.",
  },
  {
    id: 4,
    to: "/all-products/banner/upload",
    productImage: rollupBannerSmall,
    productName: "Rollup banner Small Base",
    price: "N27,000",
    quantity: "per 100",
    content: "Compact and easy to use, our small base rollup banners are the perfect way to showcase your brand or message with high-quality printing and a sleek, professional design.",
  },
  {
    id: 5,
    to: "/all-products/banner/upload",
    productImage: xBanner,
    productName: "X-Stand Banner",
    price: "N17,000",
    quantity: "per 100",
    content: "Make a big impression with our X-stand banners, featuring high-quality printing and a sturdy, easy-to-assemble design that's perfect for trade shows, events, or in-store displays.",
  },
]


const AllProductDetails = [
  {
    id: 1,
    to:"banner",
    productImage: rollupBanner,
    productName: "Banner",
    price: "₦5,000",
    quantity: "per 1"
  },
  {
    id: 2,
    to:"brochure",
    productImage: staple,
    productName: "Brochure",
    price: "₦30,000",
    quantity: "per 100"
  },
  {
    id: 3,
    to:"business-card",
    productImage: businessCard,
    productName: "Business Card",
    price: "₦9,000",
    quantity: "per 100"
  },
  {
    id: 4,
    to:"cap",
    productImage: mug,
    productName: "Cap",
    price: "₦3,000",
    quantity: "per 1"
  },
  {
    id: 5,
    to:"envelope",
    productImage: envelope,
    productName: "Envelope",
    price: "₦20,000",
    quantity: "per 100"
  },
  {
    id: 6,
    to:"flyer",
    productImage: flyer,
    productName: "Flyer",
    price: "₦9,000",
    quantity: "per 100"
  },
  {
    id: 7,
    to:"frame",
    productImage: rollupBanner,
    productName: "Frame",
    price: "N32,000",
    quantity: "per 1"
  },
  {
    id: 8,
    to:"greeting-card",
    productImage: flyer,
    productName: "Greeting Card",
    price: "₦20,000",
    quantity: "per 100"
  },
  {
    id: 9,
    to:"letter-head",
    productImage: brochure,
    productName: "Letterhead",
    price: "₦12,000",
    quantity: "per 100"
  },
  {
    id: 10,
    to:"mug",
    productImage: mug,
    productName: "Mug",
    price: "₦2,000",
    quantity: "per 1"
  },
  {
    id: 11,
    to:"mural",
    productImage: envelope,
    productName: "Mural",
    price: "₦250,000",
    quantity: "per 100"
  },
  {
    id: 12,
    to:"notepad-and-jotter",
    productImage: notepad,
    productName: "Notepad & Jotter",
    price: "₦250,000",
    quantity: "per 1"
  },
  {
    id: 13,
    to:"paper-bag",
    productImage: paperBag,
    productName: "Paper bag",
    price: "₦250,000",
    quantity: "per 100"
  },
  {
    id: 14,
    to:"pen",
    productImage: pen,
    productName: "Pen",
    price: "₦250,000",
    quantity: "per 100"
  },
  {
    id: 15,
    to:"pop-socket",
    productImage: flexBanner,
    productName: "Pop socket",
    price: "₦250,000",
    quantity: "per 1"
  },
  {
    id:16,
    to:"poster",
    productImage: envelope,
    productName: "Poster",
    price: "₦6,000",
    quantity: "per 100"
  },
  {
    id: 17,
    to:"tote-bag",
    productImage: envelope,
    productName: "Tote bag",
    price: "₦3,000",
    quantity: "per 100"
  },
  {
    id: 18,
    to:"t-shirt",
    productImage: tShirt,
    productName: "T-shirt",
    price: "₦4,000",
    quantity: "per 1"
  },
  {
    id: 19  ,
    to:"water-bottle",
    productImage: waterBottle2,
    productName: "Water bottle",
    price: "₦250,000",
    quantity: "per 1"
  },

]


const FilterItems = [
  {
    id: 1,
    name: "Promotional Items",
  },
  {
    id: 2,
    name: "Murals",
  },
  {
    id: 3,
    name: "Frames",
  },
  {
    id: 4,
    name: "Signage",
  },
  {
    id: 5,
    name: "Large Format",
  },
]

const ServiceItems = [
  {
    id: 1,
    icon: grid,
    title: "Wide Range of Product",
    content: "Whatever your printing needs, we've got you covered with our wide range of printable products. From business cards to murals and everything in between, we've got the perfect solution for your next project.",
  },
  {
    id: 2,
    icon: time,
    title: "Fast Turnaround",
    content: "Whether you have a last-minute event or just need your printed materials ASAP, we've got you covered with our fast turnaround times. You'll have your order in your hands in no time!",
  },
]

const OrderProcedure = [
  {
    id: 1,
    icon: choose,
    iconLight: chooseLight,
    title: "Choose your product",
    content: "Browse the website and select the product you want to print, such as business cards, flyers, brochures, posters, or any other materials. Choose the product specifications, such as the size, paper type, quantity, and any other necessary options."
  },
  {
    id: 2,
    icon: upload,
    iconLight: uploadLight,
    title: "Upload your design",
    content: "Once you have selected your product, you will be prompted to upload your design. Make sure that your design meets the website's file requirements, such as the correct file type, resolution, and colour mode."
  },
  {
    id: 3,
    icon: catalog,
    iconLight: catalogLight,
    title: "Checkout",
    content: "After you confirm your order and proceed to checkout, a customer service representative will contact you using the contact details you provided."
  },
]

const FooterLinks = [
  {
    id: 1,
    to: "/all-products",
    text: "All-products",
  },
  {
    id: 2,
    to: "/faqs",
    text: "FAQs",
  },
  {
    id: 3,
    to: "/privacy-policy",
    text: "Privacy Policy",
  },
  {
    id: 4,
    to: "/terms-and-conditions",
    text: "Terms and Conditions",
  },
];

const Software  = [
  {
    id: 1,
    icon: pdfIcon,
  },
  {
    id: 2,
    icon: photoShop,
  },
  {
    id: 3,
    icon: illustratorIcon,
  },
  {
    id: 4,
    icon: corelDrawIcon,
  },
]


  export {
    NavLinks, ProductDetails, FilterItems, ServiceItems, OrderProcedure, FooterLinks, AllProductDetails, BannerData, Software,
  }