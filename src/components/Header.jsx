import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/Logotip.png';

function Header({ setIsShowMenu, isShowMenu }) {
  return (
    <header className="header">
      <Link href="/" className="logotip-link">
        <Image src={Logo} alt="header-logotip" className="logotip-link-image" />
      </Link>
      <div className="header-links">
        <Link href="/" className="header-link">
          Our Services
        </Link>
        <Link href="/" className="header-link">
          LandSupplier
        </Link>
        <Link href="/" className="header-link">
          LandVille
        </Link>
        <button
          type="button"
          className="button-contact-us"
          onClick={() => setIsShowMenu({ ...isShowMenu, contactMenu: true })}
        >
          Contact Us
        </button>
      </div>
      <button
        type="button"
        className="burger-button"
        aria-label="burger-button"
        onClick={() => setIsShowMenu({ ...isShowMenu, burgerMenu: true })}
      >
        <span className="burger-buttons" />
      </button>
    </header>
  );
}

export default Header;
