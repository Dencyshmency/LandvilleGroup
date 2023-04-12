import Link from 'next/link';

function Partner() {
  return (
    <div className="content-wrapper">
      <div className="partner-wrapper">
        <h3 className="partner-title">Partner With Us and Thrive</h3>
        <p className="partner-sub-title">
          Join us to supercharge your real estate endeavors and achieve remarkable outcomes!
        </p>
        <Link href="/">
          <button type="button" className="button-contact">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Partner;
