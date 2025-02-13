import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "foodexpress",
    title: "FoodExpress",
    description:
      "A powerful Discord bot to manage FoodExpress operations, including order tracking, staff coordination, and customer support integration.",
    icon: "https:/ffrp.xyz/logofe.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://delivery.ffrp.xyz",
    tags: ["Discord.js", "Bot Development", "Node.js"],
  },
  {
    id: "fast-food-roleplays",
    title: "Fast Food Roleplays",
    description:
      "A Roblox group and game designed for a simulated fast food experience, with various roles, tasks, and staff management.",
    icon: "https:/ffrp.xyz/logo.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://ffrp.xyz",
    tags: ["Roblox", "Lua", "Game Development"],
  },
  {
    id: "staff-hub",
    title: "Staff Hub",
    description:
      "An internal portal for managing staff activities, shift scheduling, role assignments, and more, tailored for fast food roleplay environments.",
    icon: "https:/ffrp.xyz/logo.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://ffrp.xyz",
    tags: ["Web Development", "Admin Portal", "Node.js"],
  },
  {
    id: "bloxclick",
    title: "Bloxclick",
    description:
      "A ROBLOX alternative platform, featuring a game client, groups and avatar support.",
    icon: "https:/ffrp.xyz/bloxclick.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/hexly/bloxclick-schedule-system",
    tags: ["Bloxclick", "Roblox", "Game Client", "JavaScript"],
  },
  {
    id: "hexly",
    title: "Hexly",
    description:
    "A powerful HR solution for all ROBLOX communities, backed by 10 years of experience.",
    icon: "https:/ffrp.xyz/hexly.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/hexly/hexly-hr-system",
    tags: ["HR System", "Staff Management", "Web Development","Hexly","ROBLOX"],
  },
];

export default projects;
