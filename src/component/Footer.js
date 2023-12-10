import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="center-con">
        <div className="footer-con">
          <p>
            All Reserved Copyright &copy; {new Date().getFullYear()}
            <span>All Recipes</span>.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
