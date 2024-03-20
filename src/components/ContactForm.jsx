import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";


export const ContactForm = ({ colSpan, rowSpan }) => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    })
    const formStyle = {
        // Personaliza el ancho del card según la propiedad 'span'
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        // Otros estilos según tus necesidades
      }
    return (
      <div className='footer grid-container' onClick={() => set(state => !state)}>
        <div style={formStyle} className="footer-container">
            <animated.div
            className='form back'
            style={{ opacity: opacity.to(o => 1 - o), transform}}
            />
            <animated.div
            className='form front'
            style={{
                opacity,
                transform,
                rotateX: '180deg',
            }}
            />
        </div>
      </div>
    )
}
