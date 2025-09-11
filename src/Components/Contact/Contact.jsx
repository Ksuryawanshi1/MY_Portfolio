import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m6bvfpf", //service id from EmailJS
        "template_ok3vx0v", // template of Email Js
        form.current,
        "kzL-_WYzjOxj0ON7J" //public key of Email JS in account settings
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); //form reset fields after sending message
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.log("error sending message ", error);
          toast.error("Failed to send Message. Please try Again! ❌", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <ToastContainer />

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Let's Work together
        </h2>
        <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 sm:mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Let’s connect — I’d be happy to discuss opportunities, jobs.
        </p>
      </div>

      {/* Centered Form Card */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-500/30 rounded-2xl blur-2xl"></div>

        <div className="relative bg-[#0d081f] p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-700/60">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-6">
            Send Me a Message
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-5 sm:space-y-6"
          >
            {/* Name & Email */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-4 sm:px-5 sm:py-4 text-base sm:text-lg rounded-lg bg-[#131025] text-white border border-gray-600 focus:border-purple-500 transition-all outline-none placeholder-gray-400"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-4 sm:px-5 sm:py-4 text-base sm:text-lg rounded-lg bg-[#131025] text-white border border-gray-600 focus:border-purple-500 transition-all outline-none placeholder-gray-400"
              />
            </div>

            {/* Phone */}
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-4 sm:px-5 sm:py-4 text-base sm:text-lg rounded-lg bg-[#131025] text-white border border-gray-600 focus:border-purple-500 transition-all outline-none placeholder-gray-400"
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-4 sm:px-5 sm:py-4 text-base sm:text-lg rounded-lg bg-[#131025] text-white border border-gray-600 focus:border-purple-500 transition-all outline-none placeholder-gray-400"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="5"
              className="w-full px-4 py-4 sm:px-5 sm:py-4 text-base sm:text-lg rounded-lg bg-[#131025] text-white border border-gray-600 focus:border-purple-500 transition-all outline-none placeholder-gray-400"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(236,72,153,0.35)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
