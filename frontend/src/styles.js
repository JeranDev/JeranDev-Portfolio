import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: relative;
  width: auto;
  margin: 12rem auto;
`

export const ImageWrapper = styled(motion.div)`
  display: flex;
  flex: row-wrap;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  .arrow-left,
  .arrow-right {
    font-size: 3rem;
    margin: 3rem;
    &:hover {
      color: #46eb43;
      cursor: pointer;
    }
  }
  img {
    height: 500px;
    width: 50%;
    /* object-fit: ; */
    transition: transform 0.5s, filter 0.5s ease-in-out;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0);
      transform: scale(1.05);
    }
    @media (max-width: 1200px) {
      height: 100%;
      width: 90%;
      filter: none;
    }
  }
`

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  .flex-item {
    margin-top: 2.5rem;
    a {
      display: grid;
      text-align: center;
      text-decoration: none;
      span {
        margin-bottom: 0.5rem;
        color: white;
      }
    }
  }
  p {
    width: 50%;
  }
  @media (max-width: 800px) {
    flex-flow: row wrap;
    p {
      width: 80%;
    }
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 1100px) and (max-height: 1000px) {
    flex-flow: row wrap;
  }
`

export const StyledLinks = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  i {
    font-size: 4rem;
    padding: 0 1.5rem;
    &:hover {
      color: #46eb43;
      cursor: pointer;
    }
  }
  a {
    color: inherit;
  }
  @media (min-width: 2800px) {
    i {
      font-size: 8rem;
      padding: 0 2.5rem;
    }
  }
`

export const StyledButton = styled(motion.button)`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  a {
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 2800px) {
    font-size: 2.2rem;
    padding: 2rem 4rem;
    margin-top: 4rem;
  }
`