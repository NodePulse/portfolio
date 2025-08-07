import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.screen.availWidth);
    }, []);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSending(true);

        emailjs
            .sendForm(
                "service_0jfofdf", // replace with actual service ID
                "template_551d02e", // replace with actual template ID
                form.current,
                "MDS61YiQS5WSerO3B" // replace with actual public key
            )
            .then(
                () => {
                    toast.success("Message sent successfully! 🎉")
                    form.current?.reset();
                },
                (error) => {
                    console.error("Email send error:", error.text);
                }
            )
            .finally(() => setIsSending(false));
    };

    return (
        <main className="bg-gray-950 text-white">
            <section
                data-aos="fade-up"
                data-aos-delay="300"
                className="min-h-screen flex items-center justify-center px-4 md:py-32 py-24 relative overflow-hidden"
                id="contact"
            >
                {/* Decorative Blurs */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-purple-700 via-fuchsia-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-pink-500 to-purple-700 rounded-full blur-3xl opacity-40" />

                <article className="backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-5xl z-10 overflow-hidden">
                    {/* Left Visual */}
                    <aside className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 p-10">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
                            <p className="mt-4 text-purple-100 text-sm">
                                Feel free to reach out for collaborations, questions, or just to say hi!
                            </p>
                        </div>
                    </aside>

                    {/* Right Form */}
                    <div className="w-full md:w-1/2 p-8">
                        <header className="mb-8 text-center">
                            <h2 className="text-4xl font-bold text-white">Contact Us</h2>
                            <p className="text-sm text-gray-400 mt-2">
                                We’ll get back to you within 24 hours.
                            </p>
                        </header>

                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium mb-1 text-purple-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    required
                                    className="bg-gray-900 border border-purple-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium mb-1 text-purple-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="email"
                                    required
                                    className="bg-gray-900 border border-purple-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-medium mb-1 text-purple-300">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={width > 768 ? 4 : 1}
                                    required
                                    className="bg-gray-900 border border-purple-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 cursor-pointer text-white font-semibold py-2 rounded-full shadow-lg ${isSending && "opacity-50 cursor-not-allowed"
                                    }`}
                            >
                                {isSending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Contact;