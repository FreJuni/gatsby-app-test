import { Link } from "gatsby";
import React, { useState } from "react";
import { RiAlignJustify } from "react-icons/ri";
import { useRef, useEffect } from "react";

const Navebar = () => {
  const RefContainer = useRef(null);
  const [scroll, setScroll] = useState(false);
  const RefCon = useRef(null);

  useEffect(() => {
    if (RefContainer.current) {
      const Height = RefContainer.current.getBoundingClientRect().height;

      if (scroll) {
        RefCon.current.style.height = `${Height}px`;
      } else {
        RefCon.current.style.height = `0px`;
      }
    }
  }, [scroll]);

  const handle = () => {
    setScroll(!scroll);
    console.log("helo");
  };

  return (
    <div className="nav-control">
      <nav className="center-con">
        <section className="navebar-con">
          <div className="navbar-left-con">
            <div className="logo">
              <h1>
                <span>Simply</span>Recipe
              </h1>
              <button className="nav-btn" onClick={handle}>
                <RiAlignJustify />
              </button>
            </div>
          </div>
          <div className="navbar-right-con" ref={RefCon}>
            <div className="scroll-bar-con" ref={RefContainer}>
              <div className="ul-con">
                <ul>
                  <li>
                    <Link
                      to="/"
                      activeClassName="avtive"
                      onClick={() => setScroll(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/About"
                      activeClassName="avtive"
                      onClick={() => setScroll(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Recipe"
                      activeClassName="avtive"
                      onClick={() => setScroll(false)}
                    >
                      Recipe
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Taps"
                      activeClassName="avtive"
                      onClick={() => setScroll(false)}
                    >
                      Taps
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="contact-info-con"
                onClick={() => setScroll(false)}
              >
                <Link to="/Contact">Contact</Link>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navebar;
