import React, { useEffect, useRef, useState } from 'react'
import GlideJS, {
  Controls,
  Swipe,
  Breakpoints
} from '@glidejs/glide/dist/glide.modular.esm'
import { v4 as uuidv4 } from 'uuid'
import Icon from './Icon'
import styled from 'styled-components'
import { useDeviceResolution, innerDimensions } from '../../utils/window'

const ARROW_SIZE = '32px'

const Glide = ({ id, children, devices = ['desktop'] }) => {
  const [uuid] = useState(uuidv4())
  const { width, device } = useDeviceResolution()

  const firstSlide = useRef()

  useEffect(() => {
    if (devices.includes(device)) {
      const glide = new GlideJS(`#glide-${id}`, {
        type: 'carousel'
      })

      glide.on('mount.after', () => {
        const elementWidth = firstSlide.current.getElementsByTagName('div')[0]
          .offsetWidth
        const slideWidth = innerDimensions(document.getElementById(id)).width
        const perView = parseInt(slideWidth / elementWidth)
        glide.update({ perView: perView ? perView : 1 })
      })

      glide.mount({ Controls, Swipe, Breakpoints })
    }
  }, [width])

  if (!devices.includes(device)) return <div className="d-flex">{children}</div>

  return (
    <Container className="glide" id={`glide-${id}`}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((child, index) => (
            <li
              className={`glide__slide ${id}`}
              key={`${uuid}-${index}`}
              ref={firstSlide}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <LeftArrow
          className="glide__arrow glide__arrow--left"
          data-glide-dir="<"
        >
          <ArrowIcon />
        </LeftArrow>
        <RightArrow
          className="glide__arrow glide__arrow--right"
          data-glide-dir=">"
        >
          <ArrowIcon />
        </RightArrow>
      </div>
    </Container>
  )
}

export default Glide

const ArrowIcon = () => (
  <Icon name="Chevron" color="var(--text-light-gray)" size={ARROW_SIZE} />
)

const Container = styled.div`
  max-width: calc(100vw - 144px);
`

const ArrowButton = styled.button`
  border-radius: 50%;
  position: absolute;
  top: 50%;
  svg {
    transform: translateY(2px);
  }
  transition: all 0.2s ease;
  :hover {
    filter: brightness(2);
  }
`

const LeftArrow = styled(ArrowButton)`
  transform: translateY(-24px) rotate(90deg);
`

const RightArrow = styled(ArrowButton)`
  transform: translateY(-24px) rotate(-90deg);
`
