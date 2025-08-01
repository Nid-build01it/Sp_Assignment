import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className="footer-credit">
        © {new Date().getFullYear()} Nidhi | Built with ❤️ using Next.js
      </p>
    </footer>
  );
}
