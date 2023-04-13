import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

function BurgerMenu({ isShowMenu, setIsShowMenu }) {
  const toggleMenu = () => {
    document.body.style.position = 'static';
    setIsShowMenu({ ...isShowMenu, burgerMenu: false });
  };

  return (
    <div className={`burger-menu-wrapper ${isShowMenu.burgerMenu === true ? 'active-burger' : ''}`}>
      <div className="burger-toggle">
        <button type="button" className="burger-button-active" onClick={() => toggleMenu()}>
          <span className="burger-button-line" />
        </button>
      </div>
      <div className="burger-links">
        <Link className="burger-link" href="/">
          Our Services
        </Link>
        <Link className="burger-link" href="/">
          LandSupplier
        </Link>
        <Link className="burger-link" href="/">
          LandVille
        </Link>
      </div>
      <div className="burger-navigation">
        <div className="burger-menu-links">
          <p className="burger-menu-title">
            Please feel welcome to get in touch and connect with us anytime.
          </p>
          <div className="burger-menu-items">
            <div>
              <Link href="/">
                <FaFacebook className="burger-menu-link" />
              </Link>
              <Link href="/">
                <FaLinkedin className="burger-menu-link" />
              </Link>
              <Link href="/">
                <FaYoutube className="burger-menu-link" />
              </Link>
            </div>
            <div>
              <Link href="/">
                <FaTwitter className="burger-menu-link" />
              </Link>
              <Link href="/">
                <FaInstagram className="burger-menu-link" />
              </Link>
              <Link href="/">
                <MdOutlineAlternateEmail className="burger-menu-link" />
              </Link>
            </div>
          </div>
          <button
            type="button"
            className="button-contact"
            onClick={() =>
              setIsShowMenu({
                burgerMenu: false,
                contactMenu: true,
              })
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
