import Link from "next/link";

import { NavLinks } from "@/constant";
import AuthProvider from "./AuthProvider";
import { getCurrentUser } from "@/lib/session";

import ProfileMenu from "./ProfileMenu";
import BlurredImage from "./BlurredImage";

const NavBar = async () => {
    const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <BlurredImage src="/logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7 nav">
          {NavLinks.map(item =>
            <li key={item.key}>
              <Link href={item.href}>
                {item.text}
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="flexCenter gap-4">
            {session?.user ? (
                <>
                    <ProfileMenu session={session} />
                    <Link href={'/create-project'}>Share Work</Link>
                </>
            ) : (
                <AuthProvider/>
            )
        }
      </div>
    </nav>
  );
};

export default NavBar;
