const debounce = (originalFunction) => {
  let id;

  const debouncedFunction = () => {
    clearTimeout(id);
    id = setTimeout(originalFunction, 1000);
  };

  return debouncedFunction;
};

export default debounce;