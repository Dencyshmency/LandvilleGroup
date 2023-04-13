function Partner({ setIsShowMenu, isShowMenu }) {
  return (
    <div className="content-wrapper">
      <div className="partner-wrapper">
        <h3 className="partner-title">
          Partner <span className="lowercase">With Us and Thrive</span>
        </h3>
        <p className="partner-sub-title">
          Join us to supercharge your real estate endeavors and achieve remarkable outcomes!
        </p>
        <button
          type="button"
          className="button-contact"
          onClick={() => setIsShowMenu({ ...isShowMenu, contactMenu: true })}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Partner;