import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-4">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">We connect job seekers with top companies to help build careers.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Browse Jobs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Resume Upload</a></li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Legal</h2>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">Email: support@jobportal.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright*/ }
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; 2025 Job Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;