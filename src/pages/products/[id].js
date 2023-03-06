import React from "react";
import { useRouter } from "next/router";

const DetailedInfo = () => {
  const router = useRouter();
  console.log(router.query.id);

  return <div>DetailedInfo</div>;
};

export default DetailedInfo;
