import { useEffect, useRef, useState } from "react";
import "animate.css"; // Import Animate.css

const Animation = ({
  animationType,
  children,
}: {
  animationType: string;
}) => {
  const [animation, setAnimation] = useState("");
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimation(animationType); // Apply animation from prop
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [animationType]); // Update effect if animationType changes

  return (
    <div ref={imgRef} className={`w-full animate__animated ${animation}`}>
      {children}{" "}
    </div>
  );
};

export default Animation;
