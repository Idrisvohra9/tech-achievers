import React from "react";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              Let's Collaborate
            </h3>
            <p className="text-gray-200">We Love it.</p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              Socials
            </h3>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
