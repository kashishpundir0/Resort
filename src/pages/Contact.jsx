import React from "react";
import toast from "react-hot-toast";



const Contact = () => {

    return (
        <section className="pt-28 pb-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Page Title */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Contact <span className="text-indigo-600">Wisteria Chalet</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Contact Form */}
                    <div className="bg-white shadow-lg p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    toast.success("Thank you!", {
                                        duration: 1000,
                                    })
                                }
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg text-lg transition"
                            >
                                Send Message
                            </button>


                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col justify-center bg-white shadow-lg p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

                        <p className="text-gray-700 text-lg mb-4">
                            📍 <strong>Location:</strong> Wisteria Chalet, Kempty Fall Road, Mussoorie (Uttarakhand) -248179
                        </p>

                        <p className="text-gray-700 text-lg mb-4">
                            📞 <strong>Phone:</strong> +91 99279065..
                        </p>

                        <p className="text-gray-700 text-lg mb-4">
                            ✉️ <strong>Email:</strong>  info@wisteriachalet.com
                        </p>

                        <p className="text-gray-700 text-lg">
                            We’re here to help you with bookings, room details, and anything else you need.
                        </p>
                    </div>
                </div>

                {/* Google Map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.909984725657!2d78.04049807539697!3d30.45414510112164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7d4ab98a0e7%3A0x7c1b3257896cbdfd!2sWisteria%20Chalet!5e0!3m2!1sen!2sin!4v1708700440000!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg shadow-lg border"
                ></iframe>


            </div>
        </section>
    );
};

export default Contact;
