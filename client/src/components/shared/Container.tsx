import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:max-w-6xl mx-auto lg:px-4 px-6">{children}</div>;
};

export default Container;
