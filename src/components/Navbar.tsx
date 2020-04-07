import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import { Navbar as BulmaNavbar, Container } from "react-bulma-components";
import { useHandler } from "../hooks/useHandler";

const Navbar: React.FC = ({}) => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");
  const toggleHamburger = useHandler(() => {
    const newActiveState = !active;
    setActive(newActiveState);
    setNavBarActiveClass(newActiveState ? "is-active" : "");
  });

  return (
    <BulmaNavbar transparent role="navigation">
      <Container>
        <BulmaNavbar.Brand>
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
          <BulmaNavbar.Burger
            className={navBarActiveClass}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </BulmaNavbar.Burger>
        </BulmaNavbar.Brand>
        <BulmaNavbar.Menu id="navMenu" className="navBarActiveClass">
          <div className="navbar-start has-text-centered">
            <BulmaNavbar.Item>
              <Link to="/about">About</Link>
            </BulmaNavbar.Item>
            <BulmaNavbar.Item>
              <Link to="/registration">Registration</Link>
            </BulmaNavbar.Item>
            <BulmaNavbar.Item>
              <a
                className="navbar-item"
                href="https://forum.campfiretails.org/"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Forum
              </a>
            </BulmaNavbar.Item>
            <BulmaNavbar.Item>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </BulmaNavbar.Item>
            <BulmaNavbar.Item>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </BulmaNavbar.Item>
            <BulmaNavbar.Item>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </BulmaNavbar.Item>
            <BulmaNavbar.Item dropdown hoverable>
              <BulmaNavbar.Link>
                <a className="navbar-link" href="https://bulma.io/more">
                  More
                </a>
              </BulmaNavbar.Link>

              <BulmaNavbar.Dropdown>
                <BulmaNavbar.Item>
                  <a href="https://bulma.io/blog">
                    <span>
                      <span className="icon has-text-orange"></span>
                      <strong>Blog</strong>
                      <br />
                      Stay updated with new features
                    </span>
                  </a>
                </BulmaNavbar.Item>
              </BulmaNavbar.Dropdown>
            </BulmaNavbar.Item>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </BulmaNavbar.Menu>
      </Container>
    </BulmaNavbar>
  );
};

export default Navbar;
