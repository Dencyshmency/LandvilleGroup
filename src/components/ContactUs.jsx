import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PhoneInput from 'react-phone-input-2';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-phone-input-2/lib/style.css';

function ContactUs({ setIsShowMenu, isShowMenu }) {
  const toggleMenu = () => {
    document.body.style.position = 'static';
    setIsShowMenu({ ...isShowMenu, contactMenu: false });
  };

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    errorPhone: '',
    errorName: '',
    submit: false,
  });

  const getData = () => {
    if (dataForm.phone.length < 11 && dataForm.name.length < 1) {
      setDataForm({
        ...dataForm,
        errorPhone: 'error-input',
        errorName: 'error-input',
      });
    } else if (dataForm.name.length < 1) {
      setDataForm({ ...dataForm, errorName: 'error-input' });
    } else if (dataForm.phone.length < 11) {
      setDataForm({ ...dataForm, errorPhone: 'error-input' });
    }
  };

  const emailHandler = (event) => {
    setDataForm({
      ...dataForm,
      email: event.target.value,
    });

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(event.target.value).toLocaleLowerCase())) {
      setDataForm({
        ...dataForm,
        errorEmail: false,
        email: event.target.value,
      });
    } else {
      setDataForm({
        ...dataForm,
        errorEmail: true,
        email: event.target.value,
      });
    }
  };
  return (
    <div
      className={`wrapper-contact-us ${
        isShowMenu.contactMenu === true ? 'active-contact-menu' : ''
      }`}
    >
      <div className="contact-us-toggle">
        <button type="button" className="contact-button-active" onClick={() => toggleMenu()}>
          <span className="contact-button-line" />
        </button>
      </div>
      <div className="contact-us-text">
        <h4 className="contact-us-title">Contact Us</h4>
      </div>
      <div className="contact-us-inputs">
        <form>
          <label htmlFor="#name-contact">
            Your Name <span>*</span>{' '}
            <input
              className={`contact-us-input ${
                dataForm.submit === false && dataForm.name.length > 4
                  ? 'enter-input'
                  : dataForm.errorName
              }`}
              onChange={(event) =>
                setDataForm({
                  ...dataForm,
                  name: event.target.value,
                })
              }
              value={dataForm.name}
              type="text"
              placeholder="Your Name"
              id="name-contact"
            />
          </label>
          <label htmlFor="#email-contact">
            Your Email <span>*</span>
            <input
              className={`contact-us-input ${
                dataForm.errorEmail === true && dataForm.email.length > 0 ? 'enter-input' : ''
              }`}
              onChange={emailHandler}
              type="email"
              placeholder="Your Email"
              id="email-contact"
            />
          </label>
          <div>
            <p className="phone-text">Phone Number</p>
            <PhoneInput
              className={`${
                dataForm.submit === false && dataForm.phone.length > 10
                  ? 'enter-input'
                  : dataForm.errorPhone
              }`}
              country="us"
              value={dataForm.phone}
              id="phone-contact"
              onChange={(event) =>
                setDataForm({
                  ...dataForm,
                  phone: event,
                })
              }
            />
          </div>

          <label htmlFor="#text-contact">
            Your Message
            <input
              onChange={(event) =>
                setDataForm({
                  ...dataForm,
                  message: event.target.value,
                })
              }
              type="text"
              placeholder="Your Message"
              id="text-message"
              className="contact-us-input input-text-message"
            />
          </label>
        </form>
        <button type="button" className="submit-button" onClick={() => getData()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
