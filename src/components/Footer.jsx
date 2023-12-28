import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="p-4 lg:p-10 text-white space-y-4 lg:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8 ">
          <div className="flex flex-col gap-y-4 lg:gap-6">
            <h2 className="text-2xl">GizmoGuru</h2>
            <p className="text-sm lg:text-base font-light">
              Embark on a journey through the realms of innovation and technological marvels with
              GizmoGuru – where the pulse of progress beats in every gadget we offer.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <FaPhone className="text-4xl" />
                <div className="flex flex-col text-sm font-light tracking-wider">
                  <span>Need help? Call Us!</span>
                  <span>800-7000-234</span>
                </div>
              </div>
              <div className="flex gap-2 text-3xl text-gray-900">
                <FaFacebook className="bg-white p-1 rounded" />
                <FaInstagram className="bg-white p-1 rounded" />
                <FaTwitter className="bg-white p-1 rounded" />
                <FaYoutube className="bg-white p-1 rounded" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 col-span-2 lg:col-start-3">
            <div className="space-y-2">
              <h2 className="text-lg">Customer Service</h2>
              <ul className="space-y-2 text-sm  lg:text-base font-thin">
                <li>Help Center</li>
                <li>Track your order</li>
                <li>My Account</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg">Get to Know Us</h2>
              <ul className="space-y-2 text-sm lg:text-base font-thin">
                <li>About us</li>
                <li>Career</li>
                <li>Leadership</li>
                <li>News & Article</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg">Partnerships</h2>
              <ul className="space-y-2 text-sm  lg:text-base font-thin">
                <li>Affiliate Program</li>
                <li>Advertise with Us</li>
                <li>Self-Publish with Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-center text-xs pb-2">&copy; 2022 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
