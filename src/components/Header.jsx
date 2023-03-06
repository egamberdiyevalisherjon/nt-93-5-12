import Link from "next/link";

const Header = () => {
  return (
    <header>
      Header
      <Link href="/">home</Link>
      <Link href={`/about`}>about</Link>
    </header>
  );
};

export default Header;
