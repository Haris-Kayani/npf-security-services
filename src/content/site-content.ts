export const siteContent = {
  name: "NPF Security Services",
  fullName: "National Police Foundation Security Services",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Coverage", href: "/coverage" },
    { label: "Our clients", href: "/clients" },
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/careers" },
  ],
  hero: {
    eyebrow: "National Police Foundation",
    headingLines: ["Security starts", "with understanding", "your needs."],
    description: "Tell us about your site and the support you need.",
  },
  process: [
    {
      title: "Tell us your requirements",
      description: "Share a few details about your site and security needs.",
    },
    {
      title: "Discuss your site",
      description: "A conversation to understand the support you need.",
    },
    {
      title: "Agree the next steps",
      description: "Review the proposed approach before moving forward.",
    },
  ],
  services: [
    {
      id: "armed-unarmed-guards",
      title: "Armed & Unarmed Guards",
    },
    {
      id: "close-protection",
      title: "Close Protection",
    },
    {
      id: "escort-services",
      title: "Escort Services",
    },
    {
      id: "event-security",
      title: "Event Security",
    },
    {
      id: "tourist-security",
      title: "Tourist Security",
    },
    {
      id: "company-security",
      title: "Company Security",
    },
    {
      id: "home-agency-security",
      title: "Home & Agency Security",
    },
    {
      id: "bank-security",
      title: "Bank Security",
    },
  ],
  contacts: [
    { kind: "phone", label: "Phone", value: "TO BE FILLED" },
    { kind: "email", label: "Email", value: "npfhqsss@gmail.com" },
    {
      kind: "address",
      label: "Office address",
      value: "NPF Plaza, Mauve Area, Sector \n G-10/4, Islamabad",
    },
  ],
} as const;
