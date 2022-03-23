import React, { useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import styled from "styled-components";

import { useData } from '../../UseContext';
import styles from './styles.module.css'

export default function PlayingCards() {
  const dummyCardData = useData();
  const [open, set] = useState(false)

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { height: '5px', width: '2px', background: 'hotpink' },
    to: {
      size: open ? '100%' : '10%',
      background: open ? 'white' : 'hotpink',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? dummyCardData : [], {
    ref: transApi,
    trail: 400 / dummyCardData.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set(open => !open)}>
        {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{ ...style, background: item.css }}
          />
        ))}
      </animated.div>
    </div>
  )
}
