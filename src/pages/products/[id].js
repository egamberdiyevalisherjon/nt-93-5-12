import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const DetailedInfo = ({ product }) => {
  // useEffect(() => console.log(product), [product]);
  // const router = useRouter();
  // console.log(router.query.id);

  return (
    <div>
      <Head>
        {/* <title>profile for {product.name}</title>
        <meta name="website" content={product.website} /> */}
      </Head>
      DetailedInfo
    </div>
  );
};

export default DetailedInfo;

// export async function getServerSideProps(context) {
//   let id = context.query.id;

//   let data = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   ).then((res) => res.json());
//   return {
//     props: {
//       product: data,
//     },
//   };
// }

// Prerendering
export async function getStaticProps(context) {
  console.log(context);
  return { props: {} };
}

export async function getStaticPaths() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return {
    paths: data.map((user) => ({ params: { id: user.id + "" } })),
    fallback: true,
  };
}
