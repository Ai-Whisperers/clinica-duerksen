export const BUSINESS = {
  name: "Clínica Duerksen",
  legalName: "Clínica Duerksen",
  doctor: "Dr. Victor Duerksen",
  specialty: "Odontología",

  // Contact
  phone: "+595 21 298 755",
  phoneRaw: "+59521298755",
  whatsapp: "https://wa.me/59521298755",
  email: "info@clinicaduerksen.com.py",

  // Location
  address: {
    street: "", // To be filled
    city: "Asunción",
    state: "Central",
    country: "Paraguay",
    zip: "",
  },

  // Online
  website: "https://clinicaduerksen.com.py",
  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // Hours
  hours: {
    weekdays: {
      morning: { open: "08:00", close: "12:00" },
      afternoon: { open: "14:30", close: "18:00" },
    },
    saturday: null,
    sunday: null,
  },
  hoursFormatted: "Lun - Vie: 08:00 - 12:00 / 14:30 - 18:00",
} as const;

export const BRAND = {
  colors: {
    primary: "#1B4D7A",
    secondary: "#4A9BD9",
    accent: "#D4A843",
    background: "#FFFFFF",
    backgroundAlt: "#F8FAFB",
    text: "#1A1A2E",
  },
  fonts: {
    primary: "Inter",
  },
} as const;

export const SEO = {
  defaultTitle: "Clínica Duerksen | Odontología de Excelencia en Asunción",
  titleTemplate: "%s | Clínica Duerksen",
  description:
    "Clínica dental del Dr. Victor Duerksen en Asunción, Paraguay. Implantes dentales, ortodoncia, estética dental y más. Atención personalizada con tecnología de vanguardia.",
  url: "https://clinicaduerksen.com.py",
  locale: "es_PY",
} as const;
