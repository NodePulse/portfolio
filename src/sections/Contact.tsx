const Contact = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen overflow-hidden flex items-center p-6 mt-10 relative justify-center"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative">
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] rounded-full shadow-[0_0_70px_rgba(182,0,182,0.7)]" />
        </aside>

        <div className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Us
            </h2>
          </header>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none"
              />
            </div>
            <button className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
              Send Message
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
