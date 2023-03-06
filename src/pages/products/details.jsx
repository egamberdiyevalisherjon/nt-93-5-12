import React, { useEffect } from "react";

const Details = () => {
  useEffect(() => {
    console.log(window);
  }, []);

  return <div>Details</div>;
};

export default Details;
