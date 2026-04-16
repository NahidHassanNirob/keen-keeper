import logo from "@/assest/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import MyLinks from "./MyLinks";

const Navbar = () => {
  const myLinks = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "TimeLine",
      pathname: "/timeline",
    },
    {
      name: "Stats",
      pathname: "/stats",
    },
  ];
  return (
    <div className="navbar flex flex-col sm:flex-row bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={"/"}>
          <Image src={logo} alt="navbar-logo" width={150} height={150}></Image>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {myLinks.map((links, ind) => (
            <MyLinks
              key={ind}
              name={links.name}
              path={links.pathname}
            ></MyLinks>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
