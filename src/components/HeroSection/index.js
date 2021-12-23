import React, { useState } from 'react'
import Video from '../videos/VideoA.mp4'

import { Button } from '../ButtonElement'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          {' '}
          Transforming the way most Haemorrhoids are looked at by most doctors
          in most situations.
        </HeroH1>
        <HeroP>
          Book a surgery today and see the right Doctor, not the one near you,
          transport yourself across time and space
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='/addbusiness'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
