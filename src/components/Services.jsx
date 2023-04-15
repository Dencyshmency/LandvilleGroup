import Image from 'next/image';
import Link from 'next/link';

import Card from '../../public/card1.png';
import Card2 from '../../public/card2.png';
import Card3 from '../../public/card3.png';
import Card4 from '../../public/card4.png';
import Card5 from '../../public/card5.png';
import Card6 from '../../public/card6.png';
import Card7 from '../../public/card7.png';
import Card8 from '../../public/card8.png';

import CardMobile from '../../public/card1-mobile.png';
import Card2Mobile from '../../public/card2-mobile.png';
import Card3Mobile from '../../public/card3-mobile.png';
import Card4Mobile from '../../public/card4-mobile.png';
import Card5Mobile from '../../public/card5-mobile.png';
import Card6Mobile from '../../public/card6-mobile.png';
import Card7Mobile from '../../public/card7-mobile.png';
import Card8Mobile from '../../public/card8-mobile.png';

function Services() {
  return (
    <div className="container gray">
      <div className="content-wrapper">
        <div className="services-wrapper">
          <h3 className="services-title">Our Services</h3>
          <p className="services-sub-title">
            Experience the advantages of partnering with our services and elevate your real estate
            journey
          </p>
          <div className="services-cards">
            <div className="services-card">
              <Image src={Card} alt="service-card" className="card-item" />
              <Image src={CardMobile} alt="service-card" className="card-item-mobile" />
              <div className="card-text">
                <p className="card-sub-title">For Investors & Wholesalers</p>
                <h5 className="card-title">Investor&apos;s Gateway to Lucrative Opportunities</h5>
              </div>
              <div>
                <Link href="https://landsupplier.com/partners" className="card-link">
                  Explore More
                  <span className="card-arrow" />
                </Link>
              </div>
            </div>
            <div className="services-card">
              <Image src={Card2} alt="service-card" className="card-item" />
              <Image src={Card2Mobile} alt="service-card" className="card-item-mobile" />
              <div className="card-text">
                <p className="card-sub-title">A-to-Z Business Solution</p>
                <h5 className="card-title">
                  Launch Your Successful Real Estate Venture
                  <br /> for Under $300
                </h5>
              </div>
              <div className="card-link">
                Explore More
                <span className="card-arrow" />
              </div>
            </div>
            <div className="services-card">
              <Image src={Card3} alt="service-card" className="card-item" />
              <Image src={Card3Mobile} alt="service-card" className="card-item-mobile" />
              <div className="card-text">
                <h5 className="card-title">Real Estate Acquisitions Data</h5>
                <p className="services-sub-title_any">
                  Acquire Extensive Real Estate Data, Including Homes, Land, Mobile Homes, Condos,
                  And Multi-Family Units. Access Mailing Addresses, Emails, And Phone Numbers For
                  Effective Outreach And Connections.
                </p>
              </div>
              <div className="card-link">
                Contact Us
                <span className="card-arrow" />
              </div>
            </div>
            <div className="services-card">
              <Image src={Card4} alt="service-card" className="card-item" />
              <Image src={Card4Mobile} alt="service-card" className="card-item-mobile" />
              <div className="card-text">
                <p className="card-sub-title">Seeking a Fast Property Sale?</p>
                <h5 className="card-title">
                  Effortlessly Sell Your Property and Receive a Direct, Fast Cash Offer with Our
                  Streamlined Process
                </h5>
              </div>
              <div>
                <Link href="https://www.landville.com/sell-land" className="card-link">
                  Explore More
                  <span className="card-arrow" />
                </Link>
              </div>
            </div>
            <div className="services-card">
              <Image src={Card5} alt="service-card" className="card-item" />
              <Image src={Card5Mobile} alt="service-card" className="card-item-mobile" />
              <div className="card-text">
                <p className="card-sub-title">Get a Fantastic Deal</p>
                <h5 className="card-title">Search LandSupplier’s Wholesale Property Deals</h5>
              </div>
              <div>
                <Link href="https://landsupplier.com" className="card-link">
                  Explore More
                  <span className="card-arrow" />
                </Link>
              </div>
            </div>
            <div className="services-card">
              <Image src={Card6} alt="service-card" className="card-item" />
              <Image src={Card6Mobile} alt="service-card" className="card-item-mobile" />
              <div className="card-text">
                <p className="card-sub-title">Properties Marketplace</p>
                <h5 className="card-title">The Ultimate Platform Connecting Buyers and Sellers</h5>
              </div>
              <div>
                <Link href="https://landville.com/" className="card-link">
                  Explore More
                  <span className="card-arrow" />
                </Link>
              </div>
            </div>
            <div className="services-card">
              <Image src={Card7} alt="service-card" className="card-item" />
              <Image src={Card7Mobile} alt="service-card" className="card-item-mobile" />
              <div className="card-text">
                <p className="card-sub-title gray-text-color">Sell for Free</p>
                <h5 className="card-title gray-text-color">
                  Begin Marketing Your Property at No Cost and Experience a Seamless Selling Journey
                </h5>
              </div>
              <div className="card-link">
                <button type="button" className="card-button gray-text-color ">
                  Coming Soon...
                </button>
              </div>
            </div>
            <div className="services-card">
              <Image src={Card8} alt="service-card" className="card-item" />
              <Image src={Card8Mobile} alt="service-card" className="card-item-mobile" />
              <div className="card-text">
                <p className="card-sub-title gray-text-color">Focused Audience Outreach</p>
                <h5 className="card-title gray-text-color">
                  Acquire Cost-Effective, Targeted Leads at Unbeatable Prices in The Market
                </h5>
              </div>
              <div className="card-link">
                <button type="button" className="card-button gray-text-color">
                  Coming Soon...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
