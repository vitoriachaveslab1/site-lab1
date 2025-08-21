const getImagePrefix = () => {
  return process.env.NEXT_PUBLIC_NODE_ENV === "production"
    ? "/LAB1/" 
    : "";
};

export { getImagePrefix };
