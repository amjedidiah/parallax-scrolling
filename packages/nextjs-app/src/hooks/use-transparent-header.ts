import { useEffect, useState } from "react";

export default function useTransparentHeader() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const peakContainer = document.getElementById("peakContainer");
      if (!peakContainer) return;

      const peakContainerPosition = peakContainer.getBoundingClientRect().top;

      // If peakContainer is at the top of the screen, make header not transparent
      setIsHeaderTransparent(peakContainerPosition > 75);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isHeaderTransparent;
}
