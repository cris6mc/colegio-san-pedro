export function scrollTo(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }