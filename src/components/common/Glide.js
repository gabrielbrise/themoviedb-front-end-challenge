import React, { useEffect, useState } from 'react'
import GlideJS, { Controls, Swipe, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import { v4 as uuidv4 } from 'uuid';
import Icon from './Icon';
import styled from 'styled-components';


const ARROW_SIZE = "32px"

const Glide = ({ id, children }) => {
  const [uuid] = useState(uuidv4())
  useEffect(() => {
    const glide = new GlideJS(`#${id}`, {
      type: 'carousel',
    })

    glide.on('mount.after', () => {
      const firstElement = document.getElementsByClassName('glide__slide')[0]
      const elementWidth = firstElement.getElementsByTagName('div')[0].offsetWidth
      const slideWidth = document.getElementById(id).offsetWidth
      const perView = parseInt(slideWidth / elementWidth)
      glide.update({ perView })
    })

    glide.mount({ Controls, Swipe, Breakpoints })
  }, [])

  return (
    <div className="glide" id={id}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((child, index) => (
            <li className="glide__slide" key={`${uuid}-${index}`}>{child}</li>
          ))}

        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <LeftArrow className="glide__arrow glide__arrow--left" data-glide-dir="<"><ArrowIcon /></LeftArrow>
        <RightArrow className="glide__arrow glide__arrow--right" data-glide-dir=">"><ArrowIcon /></RightArrow>
      </div>
    </div>
  )
}

export default Glide

const ArrowIcon = () => <Icon name="Chevron" color="var(--text-light-gray)" size={ARROW_SIZE} />

const ArrowButton = styled.button`
  border-radius: 50%;
  svg {
    transform: translateY(2px)
  }
  transition: all 0.2s ease;
  :hover {
      filter: brightness(2);
    }
`

const LeftArrow = styled(ArrowButton)`
  transform: translateY(-24px) rotate(90deg) ;
`

const RightArrow = styled(ArrowButton)`
  transform: translateY(-24px) rotate(-90deg) ;
`