import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//Styles
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
//Images
import { WaveOne, WaveTwo } from '../components/Waves'

const Nav = () => {
  const { pathname } = useLocation()

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  }, [windowSize])

  return (
    <>
      <StyledNav>
        <WaveOne />
        <WaveTwo />
        <h1>
          <Link id='logo' to='/'>
            JeranDev <br />
            <StyledSpan>Web Developer</StyledSpan>
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/ecomm'>Project 1: E-Comm</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width:
                  pathname === '/ecomm'
                    ? windowSize > 1300
                      ? '45%'
                      : '100%'
                    : '0%',
              }}
            />
          </li>
          <li>
            <Link to='/plantbag'>Project 2: Plant Bag</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width:
                  pathname === '/plantbag'
                    ? windowSize > 1300
                      ? '44%'
                      : '100%'
                    : '0%',
              }}
            />
          </li>
          <li>
            <Link to='/hellovit'>Project 3: Hellovit</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width:
                  pathname === '/hellovit'
                    ? windowSize > 1300
                      ? '47%'
                      : '100%'
                    : '0%',
              }}
            />
          </li>
        </ul>
      </StyledNav>
    </>
  )
}

const StyledNav = styled(motion.nav)`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  h1 {
    z-index: 15;
  }
  #logo {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    line-height: 0.5;
  }
  li {
    font-weight: 700;
    padding-left: 10rem;
    position: relative;
    font-size: 1rem;
    z-index: 15;
  }
  span {
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
      text-align: center;
      line-height: 0.8;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        font-size: 1.2rem;
        padding: 0;
      }
    }
  }
`

const StyledSpan = styled(motion.span)`
  font-size: 1.5rem;
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #46eb43;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 55%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`

export default Nav
