import "./ScrollToTopButton.scss";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-to-top" onClick={handleScrollToTop}>
      Scroll to top
    </button>
  );
};

export default ScrollToTopButton;
