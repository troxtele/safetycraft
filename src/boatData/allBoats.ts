import COMINGSOON1 from "@/assets/img/boats/comingsoon1.webp";
import COOMINGSOON2 from "@/assets/img/boats/comingsoon2.webp";
import MODEL750LITTLE from "@/assets/img/boats/models/700/little.webp";
import MODEL750LARGE from "@/assets/img/boats/models/700/large.webp";
import CATALOG from "@/assets/pdf/catalog.pdf";
import videoBannerOne from "@/assets/img/boat/market-availability/banner-1.jpg";
import videoBannerTwo from "@/assets/img/boat/market-availability/banner-2.jpg";
import videoBannerThree from "@/assets/img/boat/market-availability/banner-3.jpg";
import galleryOne from "@/assets/img/boat/gallery/gallery-1.webp";
import galleryTwo from "@/assets/img/boat/gallery/gallery-2.webp";
import galleryThree from "@/assets/img/boat/gallery/gallery-3.webp";
import galleryFour from "@/assets/img/boat/gallery/gallery-4.webp";
import galleryFive from "@/assets/img/boat/gallery/gallery-5.webp";
import gallerySix from "@/assets/img/boat/gallery/gallery-6.webp";
import gallerySeven from "@/assets/img/boat/gallery/gallery-7.webp";
import galleryEight from "@/assets/img/boat/gallery/gallery-8.webp";
import galleryNine from "@/assets/img/boat/gallery/gallery-9.webp";
import galleryTen from "@/assets/img/boat/gallery/gallery-10.webp";
// popup img
import popupOne from "@/assets/img/boat/popup/popup-1.webp";
import popupTwo from "@/assets/img/boat/popup/popup-2.webp";
import popupThree from "@/assets/img/boat/popup/popup-3.webp";

// boat spec
import boatOne from "@/assets/img/boat/boats/boat-1.webp";
import boatTwo from "@/assets/img/boat/boats/boat-2.webp";

export type Comparison = {
  "Length Metric (feet)": string;
  "Max Persons": string;
  "Maximum HP": string;
  "Maximum Engine Weight": string;
  "Leg Length": string;
  "Fuel Tank": string;
  "External Beam": string;
  "Internal Beam": string;
  Deadrise: string;
  "Tube Thickness": string;
  "Hull Thickness": string;
  "Total Sealed Volume (approx)": string;
  "Dry Hull Weight (approx)": string;
  "Length on Trailer": string;
  "Boat Height (approx)": string;
};

export type Boat = {
  id: string;
  modelTitle: string;
  modelDescription: string;
  price: string;
  catalogsrc?: string;
  specifications: {
    loa: string;
    boa: string;
    draft: string;
    weight: string;
    payload: string;
    engine: string;
    fuel: string;
    power: string;
    tank: string;
    speed: string;
    range: string;
    seats: string;
    lh: string;
    propulsionType: string;
    layout: string;
  };
  images: {
    modelSideImg: string;
    modelExtendedImg: string;
    gallery: string[];
  };
  videos: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    src: string;
  }[];
  detailsPage?: {
    detailsPageTitle: string;
    detailsPageSubTitle: string;
    detailsPageDescription: string;
  };
  comparison: {
    boatImage: string;
    model: string;
    title: string;
    spec: Comparison;
  };
  featureData: {
    id: number;
    title: string;
    description: string;
    image: string;
    paragraph: string;
  }[];
};

export const allBoatsModels: Boat[] = [
  {
    id: "model-xf24-cc",
    modelTitle: "XF24 CC",
    modelDescription: "Work Tender",
    price: "€ 49.000",
    catalogsrc: CATALOG,
    specifications: {
      boa: "2.35m",
      draft: "0.35m",
      engine: "Opt.",
      propulsionType: "Outboard",
      layout: "Centrel console",
      lh: "7.23m",
      loa: "7.50m",
      fuel: "Petrol/Diesel",
      weight: "1.85t",
      payload: "1.2t",
      power: "175-350hp",
      range: "200nm",
      seats: "6-10",
      speed: "40kts",
      tank: "300L",
    },
    images: {
      modelExtendedImg: MODEL750LARGE,
      modelSideImg: MODEL750LITTLE,
      gallery: [
        galleryOne,
        galleryTwo,
        galleryThree,
        galleryFour,
        galleryFive,
        gallerySix,
        gallerySeven,
        galleryEight,
        galleryNine,
        galleryTen,
      ],
    },
    videos: [
      {
        id: "1",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerOne,
        src: "https://www.youtube.com/embed/xAaloa9wsIw",
      },
      {
        id: "2",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerTwo,
        src: "https://www.youtube.com/embed/vmYxPnADbjA",
      },
      {
        id: "3",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerThree,
        src: "https://www.youtube.com/embed/rGGY6_WCuYg",
      },
    ],
    detailsPage: {
      detailsPageTitle: "XF24 CC",
      detailsPageSubTitle: "SERIUOS BEAST",
      detailsPageDescription:
        "The 2750 Ultra Centrecab evolved from our popular walk-around platform with the addition of a lean-forward‘Ultra’ windscreen that provides excellent visibility from inside the vast cabin space. Cast and fish from 360˚ of access to every usable space. It's an adventurer's dream vessel. Smooth riding, very stable and dry, excellent fuel capacity, this big rig is the perfect option for extended trips or overnighters.",
    },
    comparison: {
      boatImage: boatOne,
      model: "2000",
      title: "EXPLORAR",
      spec: {
        "Length Metric (feet)": "8.4m (27'5\")",
        "Max Persons": "9",
        "Maximum HP": "500hp",
        "Maximum Engine Weight": "635kg (1400lbs)",
        "Leg Length": "25”",
        "Fuel Tank": "500L (132gal)",
        "External Beam": "2.54m (100”), 2.5m AUS",
        "Internal Beam": "2.04m (80”)",
        Deadrise: "21.5°",
        "Tube Thickness": "4mm (5/32”)",
        "Hull Thickness": "6mm (15/64”)",
        "Total Sealed Volume (approx)": "2909L (768gal)",
        "Dry Hull Weight (approx)": "1990kg (4387lbs)",
        "Length on Trailer": "10.2m (33’6”)",
        "Boat Height (approx)": "2.72m (8'.9\")",
      },
    },

    featureData: [
      {
        id: 1,
        title: "360° OF EASY AND SAFE WALK-AROUND ACCESS",
        description: "THE WALK-AROUND CABIN",
        image: popupOne,
        paragraph:
          "The space and ergonomic access the 2750 Ultra Centrecab design allows for is unparalleled within the trailerboat industry. You can easily manoeuvre forward whilst fighting a fish or carrying gear, and the inset bow rail design keeps you safe and secure while doing so.",
      },
      {
        id: 2,
        title: "AN AGGRESSIVE LOOK WITH HUGE CABIN SPACE BENEFITS",
        description: "FORWARD RAKING WINDSCREEN",
        image: popupTwo,
        paragraph:
          "The forward raking windscreen (we like to call ‘Ultra’) on the 2750 Ultra Centrecab is an aggressive design approach that fits well with the Stabicraft DNA. The screen raking forwards allows for a further forward dash and helm and increases the cabin volume by a whopping 33% over the conventional Centrecab design.",
      },
      {
        id: 3,
        title: "THRU-HULL TRANSDUCERS",
        description: "THE ABILITY TO FIT THRU-HULL TRANSDUCERS KEEPS YOUR TRANSOM NICE AND CLEAR",
        image: popupThree,
        paragraph:
          "The 2750 range has the ability, as standard, to fit twin Airmar thru-hull transducers, which means the transom area is kept clean and clear. Thru-hull transducers are a great way to keep cleaner water around your scanning technology and provide a clearer and more consistent picture on the screen.",
      },
    ],
  },

  {
    id: "model-xf24-cab",
    price: "-",
    modelTitle: "XF18",
    modelDescription: "-",
    specifications: {
      boa: "-",
      draft: "-",
      engine: "-",
      propulsionType: "-",
      layout: "-",
      lh: "-",
      loa: "-",
      fuel: "-",
      weight: "-",
      payload: "-",
      power: "-",
      range: "-",
      seats: "-",
      speed: "-",
      tank: "-",
    },
    images: {
      modelExtendedImg: MODEL750LARGE,
      modelSideImg: MODEL750LITTLE,
      gallery: [
        galleryOne,
        galleryTwo,
        galleryThree,
        galleryFour,
        galleryFive,
        gallerySix,
        gallerySeven,
        galleryEight,
        galleryNine,
        galleryTen,
      ],
    },
    videos: [
      {
        id: "1",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerOne,
        src: "https://www.youtube.com/embed/xAaloa9wsIw",
      },
      {
        id: "2",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerTwo,
        src: "https://www.youtube.com/embed/vmYxPnADbjA",
      },
      {
        id: "3",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerThree,
        src: "https://www.youtube.com/embed/rGGY6_WCuYg",
      },
    ],
    detailsPage: {
      detailsPageTitle: "XF18",
      detailsPageSubTitle: "SERIUOS BEAST",
      detailsPageDescription:
        "The 2750 Ultra Centrecab evolved from our popular walk-around platform with the addition of a lean-forward‘Ultra’ windscreen that provides excellent visibility from inside the vast cabin space. Cast and fish from 360˚ of access to every usable space. It's an adventurer's dream vessel. Smooth riding, very stable and dry, excellent fuel capacity, this big rig is the perfect option for extended trips or overnighters.",
    },
    comparison: {
      boatImage: boatTwo,
      model: "2750",
      title: "EXPLORAR",
      spec: {
        "Length Metric (feet)": "8.4m (27'5\")",
        "Max Persons": "9",
        "Maximum HP": "500hp",
        "Maximum Engine Weight": "635kg (1400lbs)",
        "Leg Length": "25”",
        "Fuel Tank": "500L (132gal)",
        "External Beam": "2.54m (100”), 2.5m AUS",
        "Internal Beam": "2.04m (80”)",
        Deadrise: "21.5°",
        "Tube Thickness": "4mm (5/32”)",
        "Hull Thickness": "6mm (15/64”)",
        "Total Sealed Volume (approx)": "2909L (768gal)",
        "Dry Hull Weight (approx)": "1990kg (4387lbs)",
        "Length on Trailer": "10.2m (33’6”)",
        "Boat Height (approx)": "2.72m (8'.9\")",
      },
    },

    featureData: [
      {
        id: 1,
        title: "360° OF EASY AND SAFE WALK-AROUND ACCESS",
        description: "THE WALK-AROUND CABIN",
        image: popupOne,
        paragraph:
          "The space and ergonomic access the 2750 Ultra Centrecab design allows for is unparalleled within the trailerboat industry. You can easily manoeuvre forward whilst fighting a fish or carrying gear, and the inset bow rail design keeps you safe and secure while doing so.",
      },
      {
        id: 2,
        title: "AN AGGRESSIVE LOOK WITH HUGE CABIN SPACE BENEFITS",
        description: "FORWARD RAKING WINDSCREEN",
        image: popupTwo,
        paragraph:
          "The forward raking windscreen (we like to call ‘Ultra’) on the 2750 Ultra Centrecab is an aggressive design approach that fits well with the Stabicraft DNA. The screen raking forwards allows for a further forward dash and helm and increases the cabin volume by a whopping 33% over the conventional Centrecab design.",
      },
      {
        id: 3,
        title: "THRU-HULL TRANSDUCERS",
        description: "THE ABILITY TO FIT THRU-HULL TRANSDUCERS KEEPS YOUR TRANSOM NICE AND CLEAR",
        image: popupThree,
        paragraph:
          "The 2750 range has the ability, as standard, to fit twin Airmar thru-hull transducers, which means the transom area is kept clean and clear. Thru-hull transducers are a great way to keep cleaner water around your scanning technology and provide a clearer and more consistent picture on the screen.",
      },
    ],
  },
  {
    id: "model-abcd44-cc",
    modelTitle: "abcd44 CC",
    modelDescription: "Work Tender",
    price: "€ 49.000",
    catalogsrc: CATALOG,
    specifications: {
      boa: "2.35m",
      draft: "0.35m",
      engine: "Opt.",
      propulsionType: "Outboard",
      layout: "Centrel console",
      lh: "7.23m",
      loa: "7.50m",
      fuel: "Petrol/Diesel",
      weight: "1.85t",
      payload: "1.2t",
      power: "175-350hp",
      range: "200nm",
      seats: "6-10",
      speed: "40kts",
      tank: "300L",
    },
    images: {
      modelExtendedImg: MODEL750LARGE,
      modelSideImg: MODEL750LITTLE,
      gallery: [
        galleryOne,
        galleryTwo,
        galleryThree,
        galleryFour,
        galleryFive,
        gallerySix,
        gallerySeven,
        galleryEight,
        galleryNine,
        galleryTen,
      ],
    },
    videos: [
      {
        id: "1",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerOne,
        src: "https://www.youtube.com/embed/xAaloa9wsIw",
      },
      {
        id: "2",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerTwo,
        src: "https://www.youtube.com/embed/vmYxPnADbjA",
      },
      {
        id: "3",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerThree,
        src: "https://www.youtube.com/embed/rGGY6_WCuYg",
      },
    ],
    detailsPage: {
      detailsPageTitle: "XF24 CC",
      detailsPageSubTitle: "SERIUOS BEAST",
      detailsPageDescription:
        "The 2750 Ultra Centrecab evolved from our popular walk-around platform with the addition of a lean-forward‘Ultra’ windscreen that provides excellent visibility from inside the vast cabin space. Cast and fish from 360˚ of access to every usable space. It's an adventurer's dream vessel. Smooth riding, very stable and dry, excellent fuel capacity, this big rig is the perfect option for extended trips or overnighters.",
    },
    comparison: {
      boatImage: boatOne,
      model: "2000",
      title: "EXPLORAR",
      spec: {
        "Length Metric (feet)": "8.4m (27'5\")",
        "Max Persons": "9",
        "Maximum HP": "500hp",
        "Maximum Engine Weight": "635kg (1400lbs)",
        "Leg Length": "25”",
        "Fuel Tank": "500L (132gal)",
        "External Beam": "2.54m (100”), 2.5m AUS",
        "Internal Beam": "2.04m (80”)",
        Deadrise: "21.5°",
        "Tube Thickness": "4mm (5/32”)",
        "Hull Thickness": "6mm (15/64”)",
        "Total Sealed Volume (approx)": "2909L (768gal)",
        "Dry Hull Weight (approx)": "1990kg (4387lbs)",
        "Length on Trailer": "10.2m (33’6”)",
        "Boat Height (approx)": "2.72m (8'.9\")",
      },
    },

    featureData: [
      {
        id: 1,
        title: "360° OF EASY AND SAFE WALK-AROUND ACCESS",
        description: "THE WALK-AROUND CABIN",
        image: popupOne,
        paragraph:
          "The space and ergonomic access the 2750 Ultra Centrecab design allows for is unparalleled within the trailerboat industry. You can easily manoeuvre forward whilst fighting a fish or carrying gear, and the inset bow rail design keeps you safe and secure while doing so.",
      },
      {
        id: 2,
        title: "AN AGGRESSIVE LOOK WITH HUGE CABIN SPACE BENEFITS",
        description: "FORWARD RAKING WINDSCREEN",
        image: popupTwo,
        paragraph:
          "The forward raking windscreen (we like to call ‘Ultra’) on the 2750 Ultra Centrecab is an aggressive design approach that fits well with the Stabicraft DNA. The screen raking forwards allows for a further forward dash and helm and increases the cabin volume by a whopping 33% over the conventional Centrecab design.",
      },
      {
        id: 3,
        title: "THRU-HULL TRANSDUCERS",
        description: "THE ABILITY TO FIT THRU-HULL TRANSDUCERS KEEPS YOUR TRANSOM NICE AND CLEAR",
        image: popupThree,
        paragraph:
          "The 2750 range has the ability, as standard, to fit twin Airmar thru-hull transducers, which means the transom area is kept clean and clear. Thru-hull transducers are a great way to keep cleaner water around your scanning technology and provide a clearer and more consistent picture on the screen.",
      },
    ],
  },

  {
    id: "model-abcd87-cab",
    price: "-",
    modelTitle: "ABCD87 CAB",
    modelDescription: "-",
    specifications: {
      boa: "-",
      draft: "-",
      engine: "-",
      propulsionType: "-",
      layout: "-",
      lh: "-",
      loa: "-",
      fuel: "-",
      weight: "-",
      payload: "-",
      power: "-",
      range: "-",
      seats: "-",
      speed: "-",
      tank: "-",
    },
    images: {
      modelExtendedImg: MODEL750LARGE,
      modelSideImg: MODEL750LITTLE,
      gallery: [
        galleryOne,
        galleryTwo,
        galleryThree,
        galleryFour,
        galleryFive,
        gallerySix,
        gallerySeven,
        galleryEight,
        galleryNine,
        galleryTen,
      ],
    },
    videos: [
      {
        id: "1",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerOne,
        src: "https://www.youtube.com/embed/xAaloa9wsIw",
      },
      {
        id: "2",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerTwo,
        src: "https://www.youtube.com/embed/vmYxPnADbjA",
      },
      {
        id: "3",
        title: "lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos doloremque earum odio molestiae blanditiis unde nobis perspiciatis! Quae architecto sed, incidunt minima error explicabo provident suscipit exercitationem, fuga, ipsa quos?",
        thumbnail: videoBannerThree,
        src: "https://www.youtube.com/embed/rGGY6_WCuYg",
      },
    ],
    detailsPage: {
      detailsPageTitle: "XF18",
      detailsPageSubTitle: "SERIUOS BEAST",
      detailsPageDescription:
        "The 2750 Ultra Centrecab evolved from our popular walk-around platform with the addition of a lean-forward‘Ultra’ windscreen that provides excellent visibility from inside the vast cabin space. Cast and fish from 360˚ of access to every usable space. It's an adventurer's dream vessel. Smooth riding, very stable and dry, excellent fuel capacity, this big rig is the perfect option for extended trips or overnighters.",
    },
    comparison: {
      boatImage: boatTwo,
      model: "2750",
      title: "EXPLORAR",
      spec: {
        "Length Metric (feet)": "8.4m (27'5\")",
        "Max Persons": "9",
        "Maximum HP": "500hp",
        "Maximum Engine Weight": "635kg (1400lbs)",
        "Leg Length": "25”",
        "Fuel Tank": "500L (132gal)",
        "External Beam": "2.54m (100”), 2.5m AUS",
        "Internal Beam": "2.04m (80”)",
        Deadrise: "21.5°",
        "Tube Thickness": "4mm (5/32”)",
        "Hull Thickness": "6mm (15/64”)",
        "Total Sealed Volume (approx)": "2909L (768gal)",
        "Dry Hull Weight (approx)": "1990kg (4387lbs)",
        "Length on Trailer": "10.2m (33’6”)",
        "Boat Height (approx)": "2.72m (8'.9\")",
      },
    },

    featureData: [
      {
        id: 1,
        title: "360° OF EASY AND SAFE WALK-AROUND ACCESS",
        description: "THE WALK-AROUND CABIN",
        image: popupOne,
        paragraph:
          "The space and ergonomic access the 2750 Ultra Centrecab design allows for is unparalleled within the trailerboat industry. You can easily manoeuvre forward whilst fighting a fish or carrying gear, and the inset bow rail design keeps you safe and secure while doing so.",
      },
      {
        id: 2,
        title: "AN AGGRESSIVE LOOK WITH HUGE CABIN SPACE BENEFITS",
        description: "FORWARD RAKING WINDSCREEN",
        image: popupTwo,
        paragraph:
          "The forward raking windscreen (we like to call ‘Ultra’) on the 2750 Ultra Centrecab is an aggressive design approach that fits well with the Stabicraft DNA. The screen raking forwards allows for a further forward dash and helm and increases the cabin volume by a whopping 33% over the conventional Centrecab design.",
      },
      {
        id: 3,
        title: "THRU-HULL TRANSDUCERS",
        description: "THE ABILITY TO FIT THRU-HULL TRANSDUCERS KEEPS YOUR TRANSOM NICE AND CLEAR",
        image: popupThree,
        paragraph:
          "The 2750 range has the ability, as standard, to fit twin Airmar thru-hull transducers, which means the transom area is kept clean and clear. Thru-hull transducers are a great way to keep cleaner water around your scanning technology and provide a clearer and more consistent picture on the screen.",
      },
    ],
  },
];
