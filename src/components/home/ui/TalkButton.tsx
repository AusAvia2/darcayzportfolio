import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem]"
      href="https://discord.gg/foodroleplay"
      target="_blank"
    >
   Message me on Discord!
    </Link>
  );
};

export default TalkButton;
