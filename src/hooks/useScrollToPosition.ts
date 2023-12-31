interface ScrollToPositionOptions {
  targetId: string;
  offset?: number;
  behavior?: "auto" | "smooth";
}

const useScrollToPosition = () => {
  const scrollToPosition = ({
    targetId,
    offset = 0,
    behavior = "smooth",
  }: ScrollToPositionOptions) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior,
      });
    }
  };

  return { scrollToPosition };
};

export default useScrollToPosition;
