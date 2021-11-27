import React from "react";
import partner1Path from '../images/partner1.svg'
import partner2Path from '../images/partner2.svg'
import partner3Path from '../images/partner3.svg'
import partner4Path from '../images/partner4.svg'
import partner5Path from '../images/partner5.svg'
import partner6Path from '../images/partner6.svg'
import partner7Path from '../images/partner7.svg'


function Partners() {
  return (
    <section className="partners">
      <h1 className="partners__title">НАШИ ПАРТНЁРЫ</h1>
      <div className="partners__list">
        <div className="partner-card">
          <img alt="partner" className="partner-card__logo" src={partner1Path} />
        </div>
        <div className="partner-card">
          <img alt="partner" className="partner-card__logo" src={partner2Path} />
        </div>
        <div className="partner-card">
          <img alt="partner" className="partner-card__logo" src={partner3Path} />
        </div>
        <div className="partner-card">
          <img alt="partner" className="partner-card__logo" src={partner4Path} />
        </div>
        <div className="partner-card">
          <img alt="partner" className="partner-card__logo" src={partner5Path} />
        </div>
        <div className="partner-card">
          <img alt="partner" className="partner-card__logo" src={partner6Path} />
        </div>
        <div className="partner-card">
          <img alt="partner" className="partner-card__logo" src={partner7Path} />
        </div>
      </div>
    </section>
  )
  
}

export default Partners;