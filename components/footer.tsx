import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; Copyright Aqiel Ilhamy. All Rights reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js 13, Typescript, Tailwind CSS, Framer Motion,React Email
        & Resend, hosted on Vercel
      </p>
    </footer>
  );
};

export default Footer;
