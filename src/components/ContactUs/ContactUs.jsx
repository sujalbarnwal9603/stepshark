import { useNavigate } from "react-router-dom";
import React from "react";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center text-gray-700 mb-8 
        hover:text-gray-900">
        <svg
          className="h-4 w-4 mr-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <span>Back</span>
      </button>

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold uppercase mb-2">ASK OUR CUSTOMER SERVICE</h1>
        <p className="text-gray-700">Monday - Sunday: 8:00 AM to 8:00 PM</p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Customer Service Email Card */}
        <div className="border rounded-md p-6">
          <div className="mb-4">
            {/* Phone icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold uppercase mb-3">CUSTOMER SERVICE EMAIL</h2>
          <p className="text-gray-700">Use the service@onlineshop.stepshark.co.in to contact our support team</p>
        </div>

        {/* Call Center Card */}
        <div className="border rounded-md p-6">
          <div className="mb-4">
            {/* Phone icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold uppercase mb-3">CALL 1-800-120-3300</h2>
          <p className="text-gray-700">
            Depending on the landline or mobile network provider, additional costs may apply.
          </p>
        </div>

        {/* Adidas Running Support Card */}
        <div className="border rounded-md p-6 col-span-1 md:col-span-2">
          <div className="mb-4">
            {/* Running icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 4L7 15l4-1 1 6 5-11-4 1-1-6z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold uppercase mb-3">STEPSHARK RUNNING SUPPORT</h2>
          <p className="text-gray-700 mb-6">
            Email us for help with the stepshark Running app. We'll reply within 72 hours.
          </p>
          <a
            href="mailto:support@adidas.com"
            className="border border-black px-4 py-2 inline-flex items-center hover:bg-gray-100"
          >
            SEND EMAIL
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
