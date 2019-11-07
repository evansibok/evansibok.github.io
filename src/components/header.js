import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header
      style={{
        maxWidth: `100vw`,
      }}
    >
      <div
        className="headerContentContainer"
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0px 1.0875rem`,
          paddingTop: 0,
        }}
      >
        <div className="brandLogoCon">
          <Link to="/">
            <img
              src="/static/e152b5cfbba58a414f35c976307c3c1d/25835/evnsvec.png"
              alt="brand logo"
            />
          </Link>
        </div>

        <div className="rightCon">
          <nav>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <a
              className="buttonAnchor"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Resume</button>
            </a>
          </nav>

          <div className="toggleCon">
            <div className="dark-mode__toggle">
              <div className="toggle" />
            </div>
            <em>Enable Dark Mode!</em>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
