import Link from "next/link";
import {useState} from "react";
function MobileMenu() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (e) => {
    if(e.target.closest(".mobile-menu__item")){
      setIsChecked(prev => !prev);
    } else if(e.target.closest(".hamburger-menu-icon")){
      setIsChecked(prev => !prev);
    }
  }
  return (
    <>
      <label htmlFor="hamburger-menu-icon" className="hamburger-menu-icon">
        <input id="hamburger-menu-icon" type="checkbox" checked={isChecked} onChange={handleCheck}/>
      </label>
      <nav className="mobile-menu">
        <ul className="mobile-menu__list" onClick={handleCheck}>
          <li className="mobile-menu__item">
            <Link className="mobile-menu__link" href="/">Ana Sayfa</Link>
          </li>
          <li className="mobile-menu__item">
            <Link className="mobile-menu__link" href="/#hero">Hakkımızda</Link>
          </li>
          <li className="mobile-menu__item">
            <Link className="mobile-menu__link" href="/#announcements">Duyurular</Link>
          </li>
          <li className="mobile-menu__item">
            <Link className="mobile-menu__link" href="/#executives">YÖNETİM</Link>
          </li>
          <li className="mobile-menu__item">
            <Link className="mobile-menu__link" href="/#statistics">İSTATİSTİKLER</Link>
          </li>
          <li className="mobile-menu__item">
            <Link className="mobile-menu__link" href="/#faq">S.S.S.</Link>
          </li>
          <li className="mobile-menu__item">
            <Link className="mobile-menu__link" href="/#contact">İLETİŞİM</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MobileMenu;