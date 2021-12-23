import React from 'react'

import Icon1 from '../images/svg-9.svg'
import Icon2 from '../images/svg-7.svg'

import Icon3 from '../images/svg-1.svg'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      {/* <ServicesH1>Our Services</ServicesH1> */}
      <ServicesWrapper>
        {/* <ServicesCard>
          <ServicesIcon src={Icon1} alt='' />
          <ServicesH2> Last Mile Delivery</ServicesH2>
          <ServicesP>
            {' '}
            Providing last-mile delivery to businesses and provide better
            delivery estimates and to anticipate demand patterns.
          </ServicesP>
        </ServicesCard> */}
        {/* <ServicesCard>
          <ServicesIcon src={Icon2} alt='' />
          <ServicesH2> Shop on their behalf</ServicesH2>
          <ServicesP>
            {' '}
            Time is a precious commodity for today’s consumer , Help people make
            more time for what they enjoy most.
          </ServicesP>
        </ServicesCard> */}
        {/* <ServicesCard>
          <ServicesIcon src={Icon3} alt='' />
          <ServicesH2> API integration</ServicesH2>
          <ServicesP>
            {' '}
            Full API integration service that incorporates Oro eLogistics’s
            delivery service into large retailers’ e-commerce solutions
          </ServicesP>
        </ServicesCard> */}
        {/* <ServicesCard>
          <ServicesIcon src={Icon1} alt='' />
          <ServicesH2> Last Mile Delivery</ServicesH2>
          <ServicesP>
            {' '}
            Providing last-mile delivery to businesses and provide better
            delivery estimates and to anticipate demand patterns.
          </ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
