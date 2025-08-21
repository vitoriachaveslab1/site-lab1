const getImagePrefix = () => {
  if (typeof window !== "undefined" && window.location.pathname.includes("/LAB1")) {
    return "/LAB1/";
  }
  return "/";
};

export { getImagePrefix };
