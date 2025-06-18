import React from 'react';
import {
  FaStripe, FaCcVisa, FaCcMastercard, FaAmazon,
  FaPaypal, FaApplePay, FaGooglePay,
  FaStore, FaGift, FaQuestionCircle
} from 'react-icons/fa';

function Footer() {
  
function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="text-sm space-y-2">
        {items.map((item, i) => (
          <li key={i} className="hover:text-orange-500 cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PaymentIcon({ icon, label }) {
  return (
    <div className="w-10 h-8 border rounded flex items-center justify-center text-xl text-gray-700 bg-white shadow-sm">
      {icon || <span className="text-sm font-semibold">{label}</span>}
    </div>
  );
}

  return (
    <div className="bg-white text-gray-700 border-t pt-10">
      <div className="mx-auto px-5 lg:px-[120px] grid grid-cols-1 md:grid-cols-5 gap-10 pb-10">

        {/* Logo + Description + Payment */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <img src="https://img.freepik.com/premium-vector/orange-logo-design_9999-17660.jpg" alt="logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-orange-700">OrangeShop</span>
          </div>
          <p className="text-sm mb-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>

          <p className="font-semibold mb-2">Accepted Payments</p>
          <div className="flex flex-wrap gap-2">
            <PaymentIcon icon={<FaStripe />} />
            <PaymentIcon icon={<FaCcVisa />} />
            <PaymentIcon icon={<FaCcMastercard />} />
            <PaymentIcon icon={<FaAmazon />} />
            <PaymentIcon icon={<FaPaypal />} />
            <PaymentIcon icon={<FaApplePay />} />
            <PaymentIcon icon={<FaGooglePay />} />
            {/* Add Klarna SVG/icon if needed */}
            <PaymentIcon label="Klarna" />
          </div>
        </div>

        {/* Column Links */}
        <FooterColumn title="Department" items={[
          "Fashion", "Education Product", "Frozen Food", "Beverages",
          "Organic Grocery", "Office Supplies", "Beauty Products",
          "Books", "Electronics & Gadget", "Travel Accessories",
          "Fitness", "Sneakers", "Toys", "Furniture"
        ]} />

        <FooterColumn title="About Us" items={[
          "About Shopcart", "Careers", "News & Blog", "Help",
          "Press Center", "Shop By Location", "Shopcart Brands",
          "Affiliate & Partners", "Ideas & Guides"
        ]} />

        <FooterColumn title="Services" items={[
          "Gift Card", "Mobile App", "Shipping & Delivery",
          "Order Pickup", "Account Signup"
        ]} />

        <FooterColumn title="Help" items={[
          "Shopcart Help", "Returns", "Track Orders",
          "Contact Us", "Feedback", "Security & Fraud"
        ]} />
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-5 text-sm text-center text-gray-500 flex flex-col md:flex-row justify-between items-center px-5 lg:px-20">
        <div className="flex flex-wrap gap-6 items-center text-pink-600 text-sm mb-2 md:mb-0">
          <div className="flex items-center gap-1">
            <FaStore /> <span>Become Seller</span>
          </div>
          <div className="flex items-center gap-1">
            <FaGift /> <span>Gift Cards</span>
          </div>
          <div className="flex items-center gap-1">
            <FaQuestionCircle /> <span>Help Center</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-center text-gray-600">
          <span>Terms of Service</span>
          <span>Privacy & Policy</span>
          <span>
            All Right reserved by Musemind{' '}
            <a href="#" className="text-blue-500 underline">ui/ux design</a> agency | 2022
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;

{/* <div className="bg-orange-900 text-gray-300 py-1 text-center opacity-90 text-[12px]">
        <p>&copy; {new Date().getFullYear()} Cheng Lyheng. All rights reserved.</p>
      </div> */}

