import React from "react";
import "./style.scss";

const Card = () => (
  <div className="container">
    <div className="card">
      <div className="card__image-container">
        <div className="image__container">
          {/* <img
            className="card__image"
            src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          /> */}
        </div>
      </div>
      {/* <svg className="card__svg" viewBox="0 0 800 500">
        <path
          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
          stroke="transparent"
          fill="#333"
        />
        <path
          className="card__line"
          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
          stroke="pink"
          stroke-width="3"
          fill="transparent"
        />
      </svg> */}
      <div className="card__content">
        <div className="col-30">
          <img
            className="card__image__profile"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg"
            alt=""
          />
        </div>
        <div className="col-70">
          <h6 className="card__title">Lawrence Kamau</h6>
          <h6 className="card__title">No delivery</h6>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
