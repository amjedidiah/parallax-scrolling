import { useEffect, useState } from "react";

export default function useTransparentHeader() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const history = document.getElementById("history");
      if (!history) return;

      const peakContainerPosition = history.getBoundingClientRect().top;

      // If history is at the top of the screen, make header not transparent
      setIsHeaderTransparent(peakContainerPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isHeaderTransparent;
}
