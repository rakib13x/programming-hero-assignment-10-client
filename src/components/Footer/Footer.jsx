import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branded Products</a>
          <a className="link link-hover">Mobile</a>
          <a className="link link-hover">Laptops</a>
          <a className="link link-hover">Headphones</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
