// scroll functionalities

// Function to scroll the screen to the clientX and clientY coordinates of the top left of a container
const scrollToTop = (container) => {
  const pageY =
    container.current.getBoundingClientRect().top +
    document.documentElement.scrollTop;
  const pageX = 0;
  window.scrollTo({ top: pageY, left: pageX });
};

// Function to scroll the screen to the clientX and clientY coordinates of the bottom left of a container
const scrollToBottom = (container) => {
  const pageY =
    container.current.getBoundingClientRect().top +
    document.documentElement.scrollTop +
    container.current.clientHeight;
  const pageX = 0;
  window.scrollTo({ top: pageY, left: pageX });
};

export { scrollToTop, scrollToBottom };
