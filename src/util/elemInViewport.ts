export function elemInViewport(element) {
  const rect = element.getBoundingClientRect?.();
  console.log(rect);

  if (!rect) return false;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
