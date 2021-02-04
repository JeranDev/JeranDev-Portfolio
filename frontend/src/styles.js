import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Cover = styled(motion.div)`
  position: absolute;
  width: 100%;
  padding-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.85);
  @media (min-width: 700px) and (min-height: 1000px) and (max-width: 1000px) and (max-height: 1300px) {
    height: 100%;
  }
`

export const Background = styled(motion.div)`
  position: absolute;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
  z-index: -1;
`

export const Container = styled(motion.div)`
  position: relative;
  width: auto;
  margin: 12rem auto 0 auto;
  @media (max-width: 1200px) {
    margin: 15rem auto 0 auto;
  }
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
  figure {
    position: relative;
    @media (max-width: 1200px) {
      width: 90%;
    }
  }
  img {
    max-height: 500px;
    width: 100%;
    cursor: pointer;
    @media (max-width: 1200px) {
      height: 90%;
    }
  }
  figcaption {
    opacity: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #46eb43;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 4rem;
    font-weight: 700;
    transition: opacity 0.2s ease-in;
    i {
      margin-left: 0.5rem;
    }
    &:hover {
      opacity: 1;
    }
  }
`

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
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
      font-size: 3.5rem;
      margin: 0 0.2rem;
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
  @media (max-width: 1200px) {
    i {
      font-size: 5rem;
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
