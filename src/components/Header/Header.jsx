import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";

import Navigation from "./Navigation/Navigation";
const Header = ({elementRef}) => {
  return (
    <header className="header" ref={elementRef}>
      <Link href="/"><Image width="150" height="75" src="/logo-white.svg" alt="DSC logo"/></Link>
      <MobileMenu/>
      <Navigation/>
    </header>);
}

export default Header;