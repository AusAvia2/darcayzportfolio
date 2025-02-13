import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Founder & Full Stack Developer",
    company: "Fast Food Roleplays (FFRP)",
    startDate: "July 2024",
    isCurrentJob: true,
    location: "Remote (Australia)",
    description: [
      "Founded and developed Fast Food Roleplays, a Roblox group with over 30,000 members, creating dynamic roleplay systems with advanced admin commands and game passes.",
      "Led a team to design and implement custom admin systems using Adonis for session management and automated role assignments.",
      "Built and optimized various in-game systems, including automated scheduling, game progression, and user permissions.",
      "Collaborated with the ownership team to define new game mechanics, train staff, and ensure adherence to high-level quality standards.",
      "Focused on performance optimization by reducing server load and improving game speed, ensuring a smooth user experience.",
      "Developed and maintained the group’s web interface using Next.js, integrating with the Roblox API for account management and tracking.",
    ],
  },
  {
    designation: "Software Engineer (Full Stack)",
    company: "Hexly",
    startDate: "May 2023",
    isCurrentJob: false,
    location: "Remote (Australia)",
    description: [
      "Designing and developing Hexly, an advanced HR management system that simplifies workforce management, tracking, and analytics.",
      "Working with Next.js, TypeScript, and PostgreSQL to build both the front-end and back-end of the application, ensuring scalability and performance.",
      "Integrating OAuth2.0 authentication for secure and smooth user experiences across multiple devices.",
      "Developing an intuitive, user-friendly interface for HR professionals, ensuring that critical workflows are streamlined and optimized.",
      "Collaborating with cross-functional teams to implement new features, track progress, and deliver updates in agile sprint cycles.",
      "Working on data security and compliance, ensuring the HR system is secure and adheres to privacy regulations.",
    ],
  },
  {
    designation: "Lead Developer",
    company: "Staff Hub (FFRP)",
    startDate: "Mar 2024",
    isCurrentJob: false,
    location: "Remote (Australia)",
    description: [
      "Created **Staff Hub (FFRP)**, a centralized web portal for the Fast Food Roleplays ROBLOX group, designed to enhance communication and streamline internal processes.",
      "Developed a user-friendly interface allowing staff to access schedules, announcements, guides, and other key resources.",
      "Integrated a real-time chat system for staff collaboration and support, reducing response times and improving team coordination.",
      "Implemented a robust API for staff authentication and role-based permissions, ensuring secure access to different features based on staff rank.",
      "Created an event scheduling system that integrates with Roblox, automatically assigning roles and notifying team members of upcoming shifts.",
      "Focused on performance optimizations, reducing page load times and enhancing the overall user experience for all users.",
      "Collaborated with a cross-functional team to ensure the portal met the needs of all stakeholders, from junior staff to ownership team members.",
    ],
  },
  {
    designation: "Founder & Lead Developer",
    company: "FoodExpress",
    startDate: "March 2018",
    isCurrentJob: false,
    location: "Remote (Australia)",
    description: [
      "Founded and developed **FoodExpress**, a food delivery platform integrating restaurant systems for seamless order processing.",
      "Built and managed a **FoodExpress Discord bot** that interacts with both restaurant partners and delivery drivers, automating order assignments and status updates.",
      "Developed a **real-time tracking system** for food deliveries using the Discord bot, providing users with live status updates and estimated delivery times.",
      "Created a **staff hub site** that allows restaurant staff to access order details, track deliveries, and manage their schedules directly from the website.",
      "Integrated the **staff hub** with real-time notifications and updates on deliveries, staff availability, and customer orders, improving internal communication.",
      "Designed an **admin interface** for restaurant owners to manage orders, drivers, payment systems, and analytics.",
      "Optimized delivery routes by incorporating **machine learning algorithms** to determine the most efficient paths for drivers.",
      "Focused on building a **user-friendly UI** for customers to easily place orders, track deliveries, and interact with support.",
      "Collaborated with restaurant partners to ensure smooth integration of their existing POS (Point-of-Sale) systems into the platform.",
      "Worked on scaling the platform to handle large amounts of concurrent orders, ensuring performance was maintained during high demand periods.",
    ],
  },
];

export default experiences;
