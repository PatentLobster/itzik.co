import { motion } from "framer-motion";
import { useConfetti } from "../hooks/useConfetti";

import Element from "react-scroll/modules/components/Element";

export function Contact() {
  const throwConfetti = useConfetti();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      await throwConfetti();
    }
  }

  return (
    <>
      <Element className="relative" id={"contact"}>
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"></div>
        </div>
        <div className=" relative px-4 py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <motion.h3
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                initial={{ opacity: 0, y: "-1em" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                Get in touch <span className={"mx-1"} /> 👉 👈
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: "-1em" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4 text-lg text-gray-500 sm:mt-3"
              >
                I’d love to hear from you! Send me a message using the form
                below, or mail me at{" "}
                <a href="mailto:contact@itzik.co">contact@itzik.co</a>
              </motion.p>
              <form
                onSubmit={handleSubmit}
                name={"contact"}
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <motion.div
                  initial={{ opacity: 0, y: "-1em" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      required
                      aria-required
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 sm:text-sm"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: "-1em" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      required
                      aria-required
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 sm:text-sm"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, y: "-1em" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 sm:text-sm"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, y: "-1em" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 sm:text-sm"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="sm:col-span-2"
                  initial={{ opacity: 0, y: "-1em" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <div className="flex justify-between">
                    <label
                      htmlFor="how-can-we-help"
                      className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                    >
                      How can I help you?
                    </label>
                    <span
                      id="how-can-we-help-description"
                      className="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      required
                      aria-required
                      maxLength="500"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 sm:text-sm"
                      defaultValue={""}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="text-right sm:col-span-2"
                  initial={{ opacity: 0, y: "-1em" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send it!
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
