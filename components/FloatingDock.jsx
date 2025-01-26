import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  HomeIcon,
  GraduationCap,
  Youtube,
  Github,
  Mail,
  Briefcase,
  Rocket
} from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/images/brainy.png";

export function FloatingDockDemo() {
  const links = [
    {
      title: "",
      icon: <Image alt="logo" src={Logo} className="h-full w-full object-contain" />,
      href: "https://www.youtube.com/@TechAchievers-IV/featured",
      isLogo: true,
      target: "_blank",
    },
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full text-blue-500" />,
      href: "/",
    },
    {
      title: "About",
      icon: <Rocket className="h-full w-full text-purple-500" />,
      href: "/about",
    },
    {
      title: "Academics",
      icon: <GraduationCap className="h-full w-full text-green-500" />,
      href: "/academics",
    },
    {
      title: "YouTube",
      icon: <Youtube className="h-full w-full text-red-500" />,
      href: "/yt",
    },
    {
      title: "Contact Us",
      icon: <Mail className="h-full w-full text-orange-500" />,
      href: "/contact-us",
    },
    {
      title: "Services",
      icon: <Briefcase className="h-full w-full text-indigo-500" />,
      href: "/services",
    },
    {
      title: "GitHub",
      icon: (
        <Github className="h-full w-full text-gray-800 dark:text-gray-200" />
      ),
      href: "https://github.com/Idrisvohra9",
      target: "_blank",
    },
  ];
  return (
    <div className="flex items-center justify-center h-full w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
