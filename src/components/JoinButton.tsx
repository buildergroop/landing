import Link from "next/link";
import { DISCORD_INVITE } from "../../constants";

export const JoinButton: React.FC = () => {
  return (
    <Link href={DISCORD_INVITE}>
      <a
        className={`bg-white text-black hover:opacity-70 py-2 w-[10rem] text-[1rem] lg:p-3 lg:w-[14rem] lg:text-[1.3rem] rounded-full font-bold grid place-items-center`}
      >
        Join Community
      </a>
    </Link>
  );
};
