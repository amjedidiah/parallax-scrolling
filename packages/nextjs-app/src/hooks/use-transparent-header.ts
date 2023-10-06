import { useEffect, useState } from "react";

export default function useTransparentHeader() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const history = document.getElementById("history");
      if (!history) return;

      const historyPosition = history.getBoundingClientRect().top;

      // If history is at the top of the screen, make header not transparent
      setIsHeaderTransparent(historyPosition > 75);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isHeaderTransparent;
}
