import React, { useEffect, useState } from 'react'
import GlideJS, { Controls } from '@glidejs/glide/dist/glide.modular.esm'
import { v4 as uuidv4 } from 'uuid';

const Glide = ({ children }) => {
    const [uuid] = useState(uuidv4())
    useEffect(() => {
        new GlideJS('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 4,
            gap: 8,
        }).mount({ Controls })
    }, [])

    return (
        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {children.map((child, index) => (
                        <li className="glide__slide" key={`${uuid}-${index}`}>{child}</li>
                    ))}

                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">{'<'}</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">{'>'}</button>
            </div>
        </div>
    )
}

export default Glide