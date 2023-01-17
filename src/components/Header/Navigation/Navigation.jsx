import React from 'react';
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" href="/">Ana Sayfa</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" href="/#hero">Hakkımızda</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" href="/#announcements">Duyurular</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" href="/#executives">YÖNETİM</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" href="/#statistics">İSTATİSTİKLER</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" href="/#faq">S.S.S.</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" href="/#contact">İLETİŞİM</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
