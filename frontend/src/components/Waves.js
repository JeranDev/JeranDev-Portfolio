import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WaveOne = () => {
  return (
    <WaveSvg
      width='100%'
      height='80%'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d='M1 47.8175C360.733 81.8505 567.017 86.3776 949.668 47.8175C1223.98 9.33357 1400.18 7.2123 1765.59 47.8175C2194.64 90.5953 2407.34 86.303 2756.35 47.8175C3096.9 -12.8577 3329.63 -16.3298 3841 47.8175'
        stroke='#254F24'
        strokeOpacity='.3'
        strokeWidth='3'
      />
    </WaveSvg>
  )
}

export const WaveTwo = () => {
  return (
    <WaveSvg
      width='100%'
      height='60%'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d='M1 47.8175C360.733 81.8505 567.017 86.3776 949.668 47.8175C1223.98 9.33357 1400.18 7.2123 1765.59 47.8175C2194.64 90.5953 2407.34 86.303 2756.35 47.8175C3096.9 -12.8577 3329.63 -16.3298 3841 47.8175'
        stroke='#51AD31'
        strokeOpacity='.3'
        strokeWidth='3'
      />
    </WaveSvg>
  )
}

export const WaveThree = () => {
  return (
    <WaveSvg
      width='100%'
      height='100%'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d='M1 47.8175C360.733 81.8505 567.017 86.3776 949.668 47.8175C1223.98 9.33357 1400.18 7.2123 1765.59 47.8175C2194.64 90.5953 2407.34 86.303 2756.35 47.8175C3096.9 -12.8577 3329.63 -16.3298 3841 47.8175'
        stroke='#7DE87B'
        strokeOpacity='.3'
        strokeWidth='3'
      />
    </WaveSvg>
  )
}

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`
