import Container from "./Container";
import sunIcon from "../assets/images/icons/sun.png";
import moonIcon from "../assets/images/icons/moon.png";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Footer() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div
          className="sm:absolute sm:top-1/2 sm:right-0 sm:-translate-y-1/2 flex items-center justify-center pb-3 sm:pb-0 cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <img src={sunIcon.src} width={16} height={16} />
          <div className="underline ml-2 font-bold text-sm mr-3 text-white">
            Light mod
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="sm:absolute sm:top-1/2 sm:right-0 sm:-translate-y-1/2 flex items-center justify-center pb-3 sm:pb-0 cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <img src={moonIcon.src} width={16} height={16} />
          <div className="underline ml-2 font-bold text-sm mr-3 text-white">
            Dark mod
          </div>
        </div>
      );
    }
  };

  return (
    <footer className="w-full border-t-2 bg-black">
      <Container className="relative">
        <div className="py-3 mx-auto flex justify-center">
          <a
            href="mailto:c.gillet@ik.me"
            className="text-center underline font-bold text-sm text-white"
          >
            constant.gillet - c.gillet@ik.me
          </a>
        </div>
        {renderThemeChanger()}
      </Container>
    </footer>
  );
}
