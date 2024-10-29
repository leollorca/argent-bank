import Link from "next/link";

import "./globals.css";

export const metadata = {
  title: "Argent Bank - Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <nav className="main-nav">
        <Link className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src="/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <a className="main-nav-item" href="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
        {children}
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
      </body>
    </html>
  );
}
