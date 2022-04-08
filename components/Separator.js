import sardinaWhite from "../assets/images/icons/sardina-white.png";
import sardinaBlack from "../assets/images/icons/sardina-black.png";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Separator({ className }) {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={"w-full h-[22px] bg-contain " + className}
      style={{
        backgroundImage: `url('${
          currentTheme === "light" ? sardinaBlack.src : sardinaWhite.src
        }')`,
      }}
    ></div>
  );
}
