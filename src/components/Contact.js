import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nwlngqt",
        "template_v3jbydd",
        formRef.current,
        "R49f3Who2Dl-WDvZJ"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Unable to send message!");
        }
      );
  };

  return (
    <section className="text-gray-600 body-font bg-darkblue ">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div id="contact" className="text-center mb-12">
          <h2
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-4xl font-bold text-dark-orange sm:text-5xl"
          >
            Let's Keep in Touch
          </h2>
          <p
            data-aos="fade-in"
            data-aos-duration="1200"
            className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Reach out for collaborations or inquiries.
          </p>
        </div>

        {/* Contact Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  rounded-2xl shadow-2xl p-6 lg:p-10">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bg-darkblue text-white p-6 rounded-xl flex flex-col gap-4"
          >
            {/* Header */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-dark-orange">
                Get in Touch
              </h3>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center">
              <SocialHandles />
            </div>

            {/* Contact Details */}
            <div className="flex flex-col items-center mt-10">
              {/* Phone */}
              <div className="flex flex-col gap-4">
                {/* Phone */}
                <div className="flex flex-row items-center gap-4 hover:text-orange-300 transition-colors">
                  <FaPhoneAlt className="text-2xl" />
                  <a
                    href={`tel:${ContactData.phone}`}
                    className="text-base font-medium"
                  >
                    {ContactData.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-row items-center gap-4 hover:text-orange-300 transition-colors">
                  <FaEnvelope className="text-2xl" />
                  <a
                    href={`mailto:${ContactData.email}`}
                    className="text-base font-medium"
                  >
                    {ContactData.email}
                  </a>
                </div>

                {/* Address */}
                <div className="flex flex-row items-center gap-4 hover:text-orange-300 transition-colors">
                  <FaMapMarkerAlt className="text-2xl" />
                  <a
                    href="https://www.google.com/maps/place/Rajkot,+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium"
                  >
                    {ContactData.address}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form
            data-aos="fade-right"
            data-aos-duration="1000"
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-whitesmoke p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-dark-orange mb-6 text-center">
              Send Us a Message
            </h3>
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <input
                  required
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-dark-orange focus:ring-2 focus:ring-orange-200 text-gray-900 placeholder-gray-400 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  required
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-dark-orange focus:ring-2 focus:ring-orange-200 text-gray-900 placeholder-gray-400 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  required
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-dark-orange focus:ring-2 focus:ring-orange-200 text-gray-900 placeholder-gray-400 h-48 resize-none transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-dark-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        input:focus,
        textarea:focus {
          box-shadow: 0 0 8px rgba(255, 140, 0, 0.2);
        }
        button:hover {
          transform: translateY(-2px);
        }
        .social-handles a:hover {
          color: #f4f4f4;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;