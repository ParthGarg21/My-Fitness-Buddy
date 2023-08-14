const scrollToTop = (container) => {
  const pageY =
    container.current.getBoundingClientRect().top +
    document.documentElement.scrollTop;
  const pageX = 0;
  window.scrollTo({ top: pageY, left: pageX });
};

const scrollToBottom = (container) => {
  const pageY =
    container.current.getBoundingClientRect().top +
    document.documentElement.scrollTop +
    container.current.clientHeight;
  const pageX = 0;
  window.scrollTo({ top: pageY, left: pageX });
};

export { scrollToTop, scrollToBottom };
