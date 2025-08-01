import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/theme.css";

export const metadata = {
  title: "Nidhi's Site",
  description: "Next.js Assignment Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
