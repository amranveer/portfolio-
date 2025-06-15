import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/submit`, formData);

    if (res.status === 200 && res.data.status === "success") {
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setStatus("error");
  }
};

  const useFadeIn = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.3 });
    return { ref, animate: inView ? "visible" : "hidden" };
  };

  const name = useFadeIn();
  const email = useFadeIn();
  const message = useFadeIn();
  const button = useFadeIn();
  const title = useFadeIn();
  const subtitle = useFadeIn();

  return (
    <section
      id="contact"
      className="py-20 px-4  transition-colors"
    >
      <div className="max-w-2xl glass px-4 py-10  mx-auto text-center">
        <motion.h2
          ref={title.ref}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
          variants={fadeIn}
          initial="hidden"
          animate={title.animate}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          ref={subtitle.ref}
          className="text-gray-600 dark:text-gray-400 mb-10"
          variants={fadeIn}
          initial="hidden"
          animate={subtitle.animate}
        >
          I’d love to hear from you. Whether you have a question or just want to say hi 👋
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <motion.div
            ref={name.ref}
            variants={fadeIn}
            initial="hidden"
            animate={name.animate}
          >
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className=" input  w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div
            ref={email.ref}
            variants={fadeIn}
            initial="hidden"
            animate={email.animate}
          >
            <label className=" block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className= " input w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="you@example.com"
            />
          </motion.div>

          <motion.div
            ref={message.ref}
            variants={fadeIn}
            initial="hidden"
            animate={message.animate}
          >
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="input  w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </motion.div>

          <motion.div
            ref={button.ref}
            variants={fadeIn}
            initial="hidden"
            animate={button.animate}
          >
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-lg"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        </form>

        {status === "success" && (
          <motion.p
            className="text-green-600 dark:text-green-400 mt-4 text-sm"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Message sent successfully!
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="text-red-600 dark:text-red-400 mt-4 text-sm"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Contact;
