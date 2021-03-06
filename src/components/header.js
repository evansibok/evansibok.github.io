import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { useDarkMode } from "./hooks/useDarkMode"
import Menu from "./svgs/menu-component"
import CloseIcon from "./svgs/close-component"

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false)

  const toggleHandler = evt => {
    evt.preventDefault()
    setDarkMode(!darkMode)
  }

  const data = useStaticQuery(graphql`
    query navImageQuery {
      brandImage: imageSharp(
        fluid: {
          src: {
            eq: "/static/e152b5cfbba58a414f35c976307c3c1d/3a723/evans-logo.png"
          }
        }
      ) {
        fluid {
          src
          originalName
        }
      }
    }
  `)
  const brandImage = data.brandImage.fluid.src
  const brandImageName = data.brandImage.fluid.originalName

  const menuClick = () => {
    const navigationMenu = document.querySelector("#navigation")
    navigationMenu.style.display = "inherit"
  }

  const closeClick = () => {
    const navigationMenu = document.querySelector("#navigation")
    navigationMenu.style.display = "none"
  }

  return (
    <header>
      <div className="leftCon">
        <div className="brandLogoCon">
          <Link to="/">
            <img src={brandImage} alt={brandImageName} />
          </Link>
        </div>

        <div className="toggleMenu">
          <div className="toggleCon">
            <button className="dark-mode__toggle" onClick={toggleHandler}>
              <div className={darkMode ? "toggle toggled" : "toggle"} />
            </button>
          </div>

          <Menu onClick={menuClick} />
        </div>
      </div>

      <nav id="navigation">
        <CloseIcon onClick={closeClick} />
        <div>
          <Link to="/about">About Me</Link>
        </div>

        <div>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
