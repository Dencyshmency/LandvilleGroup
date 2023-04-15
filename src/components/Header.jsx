import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/Logotip.svg';

function Header({ setIsShowMenu, isShowMenu }) {
  const toggleMenu = () => {
    document.body.style.overflow = 'hidden';
    setIsShowMenu({ ...isShowMenu, burgerMenu: true });
  };

  const toggleMenus = () => {
    document.body.style.overflow = 'hidden';
    setIsShowMenu({ ...isShowMenu, contactMenu: true });
  };

  return (
    <header className="header">
      <Link href="/" className="logotip-link">
        <Image src={Logo} alt="header-logotip" className="logotip-link-image" />
      </Link>
      <div className="header-links">
        <Link href="/" className="header-link">
          Our Services
        </Link>
        <Link href="https://landsupplier.com" className="header-link">
          LandSupplier
        </Link>
        <Link href="https://landville.com" className="header-link">
          LandVille
        </Link>
        <button type="button" className="button-contact-us" onClick={() => toggleMenus()}>
          Contact Us
        </button>
      </div>
      <button
        type="button"
        className="burger-button"
        aria-label="burger-button"
        onClick={() => toggleMenu()}
      >
        <span className="burger-buttons" />
      </button>
    </header>
  );
}

export default Header;
