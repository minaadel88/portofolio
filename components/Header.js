// components/Header.js
import Link from 'next/link';

const Header = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About Me</Link>
    <Link href="/projects">Projects</Link>
  </nav>
);

export default Header;
