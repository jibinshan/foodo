"use client";
import Image from "next/image";
import React, { useEffect } from "react";

function WhatsappLive() {
  const baseUrl = "https://api.whatsapp.com/send/";
  const whatsappNumber = "+44 7425 737261";
  const encodedMessage =
    "Hello, I would like to know more about your services.";
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(
        ".whatsapp-link"
      ) as HTMLAnchorElement;
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visible");
      } else {
        whatsappLinkElement?.classList.remove("visible");
      }
    };

    const checkVisibility = () => {
      const whatsappLinkElement = document.querySelector(
        ".whatsapp-link"
      ) as HTMLAnchorElement;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } else {
        whatsappLinkElement?.classList.add("visible");
      }
    };
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      className="whatsapp-link fixed  right-[30px] bottom-[-80px] md:right-[60px] z-50 transition-all duration-300 ease-in-out"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="relative flex items-center justify-center w-[55px] h-[55px]">
        {/* Ping background */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping">  </span>

        {/* WhatsApp icon */}
        <Image
          src="/whatsapp/whatsapp.png"
          alt="whatsapp"
          width={55}
          height={55}
          className="relative z-10 w-[55px] h-[55px] transition-transform duration-300 hover:scale-125"
        />
      </span>
    </a>
  );
}

export default WhatsappLive;
