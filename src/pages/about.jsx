import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import imageUrl from "../images/gentra.jpeg";

const About = () => {
  return (
    <div>
      <Head>
        <meta name="keywords" content="HTML, AI, CSS, NexT" />
        <title>About</title>
      </Head>
      <Header></Header>
      <p>lorem3000</p>
      About
      <Image src={imageUrl} alt="" width={400} height={400} priority />
      <Image
        src={"https://plat.ai/wp-content/uploads/aibuild.jpg"}
        alt=""
        width={400}
        height={400}
        priority
      />
    </div>
  );
};

export default About;
