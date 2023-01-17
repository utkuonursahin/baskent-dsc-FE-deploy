import Link from "next/link";
function MobileMenu({isClicked,setIsClicked}) {;
  return (
    <nav className={`mobile-menu ${isClicked ? "mobile-menu--active" : ''}`} onClick={() => setIsClicked(prev => !prev)}>
      <ul className="mobile-menu__list">
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
  );
}

export default MobileMenu;