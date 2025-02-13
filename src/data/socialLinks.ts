import {
  faGithub,
  faLinkedin,
  faTelegram,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: "https://github.com/AusAvia2",
    icon: faGithub,
    text: "Darcayz",
  },
  {
    name: Strings.github,
    url: "https://discord.gg/foodroleplay",
    icon: faDiscord,
    text: "Darcayz",
  },
];

export default socialLinks;
