// Central business details. Update these before launch.
export const site = {
  name: "Kris Engelhardt",
  role: "Independent Web Designer + Developer",
  location: "Melbourne, Australia",
  email: "kris@krisengelhardt.com",
  phone: "0403 720 218",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.krisengelhardt.com",
  description:
    "Independent web designer and developer in Melbourne. Websites, ecommerce, redesigns and custom software for small businesses.",
  availability: "Available for freelance projects",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

/** International format for tel: and sms: links. */
export const phoneHref = `+61${site.phone.replace(/\D/g, "").replace(/^0/, "")}`;
