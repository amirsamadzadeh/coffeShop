"use client";

import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Mobile */}
      <button
        onClick={scrollToTop}
        className="sm:hidden rounded-lg border border-gray-100 px-4 py-2.5 shadow-sm"
      >
        <MdKeyboardArrowUp size={20} />
      </button>

      {/* Desktop */}
      <button
        onClick={scrollToTop}
        className="hidden sm:flex items-center gap-2 rounded-lg border border-gray-100 px-4 py-2 shadow-sm"
      >
        <MdKeyboardArrowUp size={20} />
        <span>بازگشت به بالا</span>
      </button>
    </>
  );
};

export default ScrollToTop;
