import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <InfinitySpin color="grey" />
    </div>
  );
};

export default Loader;
