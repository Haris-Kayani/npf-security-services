export const siteContent = {
  name: "NPF Security Services",
  fullName: "National Police Foundation Security Services",
  navigation: [
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
  serviceSlots: ["service-01", "service-02", "service-03", "service-04"],
  contacts: [
    { kind: "phone", label: "Phone", value: "TO BE FILLED" },
    { kind: "email", label: "Email", value: "TO BE FILLED" },
    { kind: "address", label: "Office address", value: "TO BE FILLED" },
  ],
} as const;
