import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 items-center bg-gray-800 text-white pl-10 pt-32 pb-24">
      <div className="border-dashed border-r-4 pl-10 border-red-600">
        <h2 className="text-3xl font-bold mb-6">Opening Times</h2>
        <div className="text-red-50">
          <p className="mb-3">Monday – Thursday: 08AM – 10PM</p>
          <p className="mb-3">Friday – Saturday: 10AM–11:30PM</p>
          <p className="mb-3">Sunday: Closed</p>
          <p className="mb-3">Booking TIme: 24/7 Hours</p>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center text-center gap-2">
        <img
          className="h-14 w-14 rounded-full"
          src="../../../public/chef.jpg"
          alt=""
        />
        <h3 className="text-5xl font-bold tracking-wide mb-5">
          Baburch
          <span className="text-red-600">i</span>
        </h3>
        <p className="text-lg text-red-50 font-thin mb-6">
          From our kitchen to yours, we're thrilled to share these delectable
          recipes <br /> from our chefs. Let us know how they turn out and{" "}
          <br /> tag us in your creations on social media!
        </p>
        <div className="flex gap-4">
          <FontAwesomeIcon className="icon fa-lg" icon={faFacebook} />
          <FontAwesomeIcon className="icon fa-lg" icon={faInstagram} />
          <FontAwesomeIcon className="icon fa-lg" icon={faTwitter} />
        </div>
      </div>
      <div className="border-dashed border-l-4 pl-10 border-red-600">
        <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
        <p className="flex gap-4 items-center mb-3">
          <FontAwesomeIcon className="icon fa-lg" icon={faMapLocationDot} />
          Dhaka, Bananin, 3300
        </p>
        <p className="flex gap-4 items-center mb-3">
          <FontAwesomeIcon className="icon fa-lg" icon={faEnvelope} />
          baburchiBD@food.com
        </p>
        <p className="flex gap-4 items-center">
          <FontAwesomeIcon className="icon fa-lg" icon={faPhone} />
          +880-1234567899
        </p>
      </div>
    </div>
  );
};

export default Footer;
