import {
  faGithub,
  faLinkedin,
  faTelegram,
  faInstagram,
  faDiscord,
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
    text: "Daqinix",
  },
  {
    name: Strings.github,
    url: "https://discord.gg/freshlane",
    icon: faDiscord,
    text: "Daqinix",
  },
    {
    name: Strings.github,
    url: "https://www.youtube.com/@daqinix",
    icon: faDiscord,
    text: "Daqinix",
  },
];

export default socialLinks;
