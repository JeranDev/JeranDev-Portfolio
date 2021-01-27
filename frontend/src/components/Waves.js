import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WaveOne = () => {
  return (
    <WaveSvg
      width='2400'
      height='105'
      viewBox='0 0 2400 105'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMaxYMin meet'
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d='M1 51.1279C220.583 84.6544 342.937 95.4404 555.17 51.1279C785.752 3.39622 915.031 10.8263 1145.61 51.1279C1357.01 92.9703 1472.37 96.9005 1669.56 51.1279C1956.06 -16.4597 2113.72 -3.9763 2393 51.1279'
        stroke='#254F24'
        strokeOpacity='.5'
        strokeWidth='3'
      />
    </WaveSvg>
  )
}

export const WaveTwo = () => {
  return (
    <WaveSvg
      width='2400'
      height='140'
      viewBox='0 0 2400 140'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMax meet'
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d='M1 51.6283C225.084 86.5237 353.581 90.0325 591.941 51.6283C762.814 13.2999 872.573 11.1872 1100.19 51.6283C1367.45 94.2332 1499.95 89.9582 1717.35 51.6283C1929.48 -8.80165 2074.46 -12.2598 2393 51.6283'
        stroke='#51AD31'
        strokeOpacity='.5'
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
