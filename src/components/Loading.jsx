import React from "react";
import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div> */}
      <div>
        <ThreeDot color="#32cd32" size="medium" text="" textColor="" />
      </div>
    </div>
  );
};

export default Loading;
