import PropTypes from 'prop-types'



export const Card = ({title, subtitle, cardText, cardSpan, colSpan, rowSpan, customClass}) => {

  const cardStyle = {
    // Personaliza el ancho del card según la propiedad 'span'
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
    // Otros estilos según tus necesidades
  }

  return (
    <div className={`card ${customClass}`} style={cardStyle}>
        {title && <h2>{ title }</h2>}
        {subtitle && <h3>{ subtitle }</h3>}
        {cardText && <p>{ cardText }</p>}
        {cardSpan && <span>{ cardSpan }</span>}
    </div>
  )
}


Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cardText: PropTypes.string,
  cardSpan: PropTypes.string,
  colSpan: PropTypes.number.isRequired,
  rowSpan: PropTypes.number.isRequired,
  customClass: PropTypes.string,
}