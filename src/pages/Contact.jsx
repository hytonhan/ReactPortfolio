import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Contact Me</h1>

      <div className="space-y-6 text-gray-700 text-lg">
        {/* Email */}
        <p className="flex items-center space-x-3">
          <FaEnvelope className="text-blue-600 w-5 h-5" />
          <span>Email:</span>
          <a
            href="mailto:hannuhytonen@gmail.com"
            className="text-blue-600 hover:underline"
          >
            hannuhytonen@gmail.com
          </a>
        </p>

        {/* Location */}
        <p className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-red-600 w-5 h-5" />
          <span>Location:</span>
          <span>Lempäälä, Finland</span>
        </p>

        {/* LinkedIn */}
        <p className="flex items-center space-x-3">
          <FaLinkedin className="text-blue-700 w-5 h-5" />
          <span>LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/hannu-hytönen-7a9706151/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.linkedin.com/in/hannu-hytönen-7a9706151/
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
