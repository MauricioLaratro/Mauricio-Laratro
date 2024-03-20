import { Card } from "./Card"

export const HeroComponent = () => {
  return (
    <section className="hero-content grid-container">
      <Card
        title={'Soy el primer card'}
        subtitle={'Estoy para testar el funcionamiento'}
        cardText={'Esto seria una desciption un poco mas larga dentro del card'}
        cardSpan={'Y esto seria un texto decorativo o de información poca relevante'}
        colSpan={4}
        rowSpan={2}
        />
    </section>
  )
}
