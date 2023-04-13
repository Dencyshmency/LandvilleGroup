import Link from 'next/link';

import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

import { MdOutlineAlternateEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className="container-footer">
      <div className="content-wrapper">
        <div className="footer-wrapper">
          <p className="footer-sub-title">
            Please feel welcome to get in touch and connect with us anytime.
          </p>
          <div className="footer-links">
            <div>
              <Link href="/">
                <FaFacebook className="footer-link" />
              </Link>
              <Link href="/">
                <FaLinkedin className="footer-link" />
              </Link>
              <Link href="/">
                <FaYoutube className="footer-link" />
              </Link>
            </div>
            <div>
              <Link href="/">
                <FaTwitter className="footer-link" />
              </Link>
              <Link href="/">
                <FaInstagram className="footer-link" />
              </Link>
              <Link href="/">
                <MdOutlineAlternateEmail className="footer-link" />
              </Link>
            </div>
          </div>
          <p className="copyright-text">© 2023 LandvilleGroup. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
