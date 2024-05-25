import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              EnactOn is a leading platform providing the best services to our
              customers. We value quality and customer satisfaction above all.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                1234 Street Name, City, State, 12345
              </li>
              <li className="text-gray-400">Email: info@enacton.com</li>
              <li className="text-gray-400">Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-400">
            &copy; 2024 EnactOn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
