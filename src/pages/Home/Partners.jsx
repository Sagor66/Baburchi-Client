import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/partners/kacchi-dine.png"
import img2 from "../../assets/partners/bhojonaloy.png"
import img3 from "../../assets/partners/cine-vibe.png"
import img4 from "../../assets/partners/kacchi-khor.png"
import img5 from "../../assets/partners/panta-polao.png"
import img6 from "../../assets/partners/sultans-dine.png"
import img7 from "../../assets/partners/petuk.png"
import img8 from "../../assets/partners/the-diner.png"

const Partners = () => {
  return (
    <div className="mt-32 mb-48">
      <h2 className="section-header">Partner Restaurants</h2>
      <Marquee className="bg-red-100 py-10" speed={150}>
        <img className="w-40 h-40 object-cover mr-20" src={img1} alt="" />
        <img className="w-40 h-40 object-cover mr-20" src={img2} alt="" />
        <img className="w-40 h-40 object-cover mr-20" src={img3} alt="" />
        <img className="w-40 h-40 object-cover mr-20" src={img4} alt="" />
        <img className="w-40 h-40 object-cover mr-20" src={img5} alt="" />
        <img className="w-40 h-40 object-cover mr-20" src={img7} alt="" />
        <img className="w-40 h-40 object-cover mr-20" src={img6} alt="" />
        <img className="w-40 h-40 object-cover mr-20" src={img8} alt="" />
      </Marquee>
    </div>
  );
};

export default Partners;
