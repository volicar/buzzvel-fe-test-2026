export type NavLink = {
  label: string;
  href: string;
};

export type Category = {
  title: string;
  description: string;
  href: string;
};

export type Step = {
  title: string;
  description: string;
  icon: "focus" | "experience" | "practice";
};

export type Stat = {
  value: string;
  label: string;
};

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export type PhotoColumn = {
  className: string;
  photos: Photo[];
};

export type FooterGroup = {
  title: string;
  links: NavLink[];
};

export const navLinks: NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#featured" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#how-it-works" },
];

export const learnerAvatars = [
  "/images/learner-1.webp",
  "/images/learner-2.webp",
  "/images/learner-3.webp",
];

export const memberAvatars = [
  "/images/member-1.webp",
  "/images/member-2.webp",
  "/images/member-3.webp",
  "/images/member-4.webp",
];

export const categories: Category[] = [
  {
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#featured",
  },
  {
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
    href: "#featured",
  },
  {
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
    href: "#featured",
  },
  {
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#featured",
  },
];

export const featuredCourse = {
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "with Maya Chen · Senior Product Designer",
  details: ["8 lessons", "2h 40min", "Intermediate"],
  image: {
    src: "/images/course.webp",
    alt: "Product design course — student working on interface designs",
  },
};

export const steps: Step[] = [
  {
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: "focus",
  },
  {
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    icon: "experience",
  },
  {
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: "practice",
  },
];

export const testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  name: "Alex Morgan",
  role: "Product Manager",
  avatar: "/images/alex-morgan.webp",
};

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export const photoColumns: PhotoColumn[] = [
  {
    className: "w-[26.5%] items-end pt-[20.6%]",
    photos: [
      {
        src: "/images/people-1.webp",
        alt: "Student raising a hand during an online class",
        width: 222,
        height: 330,
        className: "w-[74.4%]",
      },
      {
        src: "/images/people-2.webp",
        alt: "Three students working together around a laptop",
        width: 293,
        height: 435,
        className: "w-full",
      },
    ],
  },
  {
    className: "w-[19.75%] pt-[4.9%]",
    photos: [
      {
        src: "/images/people-3.webp",
        alt: "Student in a blue hoodie reading a book",
        width: 222,
        height: 362,
        className: "w-full",
      },
      {
        src: "/images/people-4.webp",
        alt: "Two musicians practising with a microphone and a music stand",
        width: 222,
        height: 366,
        className: "w-full",
      },
      {
        src: "/images/people-5.webp",
        alt: "Student taking notes from a book next to a tablet",
        width: 222,
        height: 278,
        className: "w-full",
      },
    ],
  },
  {
    className: "w-[19.75%] pt-[6.6%]",
    photos: [
      {
        src: "/images/people-6.webp",
        alt: "Graduate in cap and gown holding a diploma",
        width: 222,
        height: 296,
        className: "w-full",
      },
      {
        src: "/images/people-7.webp",
        alt: "Student working on a laptop at a home desk",
        width: 222,
        height: 297,
        className: "w-full",
      },
      {
        src: "/images/people-8.webp",
        alt: "Teacher giving an online lesson on a desktop screen",
        width: 222,
        height: 330,
        className: "w-full",
      },
    ],
  },
  {
    className: "w-[24.7%] items-start pt-[16.6%]",
    photos: [
      {
        src: "/images/people-9.webp",
        alt: "Student in a yellow shirt holding folders outside a campus building",
        width: 273,
        height: 431,
        className: "w-full",
      },
      {
        src: "/images/people-10.webp",
        alt: "Student in a headscarf holding books and a coffee cup",
        width: 222,
        height: 286,
        className: "w-4/5",
      },
    ],
  },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#community" },
      { label: "For Teams", href: "#featured" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Careers", href: "#contact" },
      { label: "Journal", href: "#community" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#main" },
      { label: "Privacy", href: "#main" },
    ],
  },
];
