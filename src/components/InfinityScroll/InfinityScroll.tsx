import React, { useState, useEffect, useRef, useCallback } from "react";

const InfinityScroll = ({
  render,
}: {
  render: (
    pageNumber: number,
    lastElementRef: (node: HTMLDivElement | null) => void
  ) => React.ReactNode;
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      observer.current.observe(node);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []); // I decided to use IntersectionObserver and lastElementRef on the grounds that it's a more efficient way.

  //other way:
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return render(pageNumber, lastElementRef) as JSX.Element | null;
};

export default InfinityScroll;
