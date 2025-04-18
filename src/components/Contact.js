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
        <div className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-darkblue p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="hidden md:block text-2xl lg:text-3xl text-dark-orange font-medium mb-3 lg:mb-4"
            >
              Get In Touch
            </h1>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-5 mb-4 justify-center md:mb-5"
            >
              <SocialHandles />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5"
            >
              <FaPhoneAlt className="text-white" />
              <p className="text-white md:text-lg ">{ContactData.phone}</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5"
            >
              <FaEnvelope className="text-white" />
              <a
                href={`mailto:${ContactData.email}`}
                className="text-white md:text-lg"
              >
                {ContactData.email}
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center md:gap-2 lg:gap-5"
            >
              <FaMapMarkerAlt className="text-white" />
              <p className="leading-normal text-start text-white md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>
          <form
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-once="false"
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex bg-whitesmoke flex-col p-2 rounded-lg md:w-1/2 md:p-4 lg:px-5 lg:py-7 lg:m-4 lg:w-3/5"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <input
                required
                placeholder="Name"
                type="text"
                name="user_name"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <input
                required
                placeholder="Email"
                type="email"
                name="user_email"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <textarea
                required
                placeholder="Message"
                name="message"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black p-2 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <button className=" font-medium mx-auto my-3 text-white bg-dark-orange border-0 py-2 px-12 focus:outline-none hover:scale-110 hover:bg-orange-600 transition duration-500 rounded-xl text-lg">
                Send
              </button>
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