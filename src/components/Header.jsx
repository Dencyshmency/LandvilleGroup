import Image from 'next/image';
import Link from 'next/link';

import Logo from "../../public/Logotip.png";

function Header() {
  return (
    <header className="header">
      <Link href="/">
        <Image src={Logo} alt="header-logotip" />
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
        <button type="button" className="button-contact-us">
          Contact Us
        </button>
      </div>
    </header>
  );
}

export default Header;
