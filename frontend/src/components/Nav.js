import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//Styles
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
//Images
import { WaveOne, WaveTwo, WaveThree } from '../components/Waves'

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
        <WaveThree />
        <h1>
          <Link id='logo' to='/'>
            Jeran Burget
          </Link>
        </h1>
        <ul>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link to='/ecomm'>Project: E-Comm</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width: pathname === '/ecomm' ? '100%' : '0%',
              }}
            />
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link to='/plantbag'>Project: Plant Bag</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width: pathname === '/plantbag' ? '100%' : '0%',
              }}
            />
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
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
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10rem;
  background: #1f2529;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #46eb43;
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
        font-size: 1rem;
        padding: 0;
      }
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
  @media (max-width: 1300px) {
    left: 0%;
  }
`

export default Nav
