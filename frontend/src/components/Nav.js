import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//Styles
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

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
        <h1>
          <Link id='logo' to='/'>
            Jeran Burget
          </Link>
        </h1>
        <ul>
          <motion.li>
            <Link to='/ecomm'>Project: Oldegg</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width: pathname === '/ecomm' ? '100%' : '0%',
              }}
            />
          </motion.li>
          <motion.li>
            <Link to='/plantsack'>Project: Plant Sack</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width: pathname === '/plantsack' ? '100%' : '0%',
              }}
            />
          </motion.li>
          <motion.li>
            <Link to='/hellovit'>Project: Hellovit</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width: pathname === '/hellovit' ? '100%' : '0%',
              }}
            />
          </motion.li>
        </ul>
      </StyledNav>
    </>
  )
}

const StyledNav = styled(motion.nav)`
  background: linear-gradient(#000, rgba(0, 0, 0, 0));
  min-height: 10vh;
  overflow: hidden;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 10rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #46eb43;
    }
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
  }
  li {
    font-weight: 700;
    padding-left: 10rem;
    position: relative;
    font-size: 1.2rem;
    z-index: 15;
  }
  span {
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    padding: 0rem 1rem;
    #logo {
      display: inline-block;
      font-size: 3.5rem;
      margin: 2rem;
      text-align: center;
      line-height: 0.8;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        font-size: 1.5rem;
        padding: 0;
      }
    }
  }

  @media (max-width: 900px) {
    #logo {
      font-size: 2.5rem;
    }
    ul {
      li {
        font-size: 1rem;
      }
    }
  }
  @media (min-width: 2800px) {
    padding: 1.5rem 10rem;
    #logo {
      font-size: 6rem;
    }
    li {
      font-size: 2.4rem;
    }
  }
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #46eb43;
  width: 0%;
  position: relative;
  bottom: -50%;
  left: 0%;
`

export default Nav
