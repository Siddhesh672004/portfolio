import { useEffect, useRef, useState } from "react";

/**
 * Mounts children only when the wrapper enters the viewport.
 * Keeps DOM light — perfect for heavy WebGL canvases that
 * otherwise stay alive on every section.
 */
const LazyMount = ({
  children,
  rootMargin = "200px",
  fallback = null,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { rootMargin, threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, once]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : fallback}
    </div>
  );
};

export default LazyMount;
