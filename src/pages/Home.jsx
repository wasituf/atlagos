import Button from '../components/Button'
import CarouselCard from '../components/CarouselCard'
import { FaRegHandshake, FaProjectDiagram, FaHiking } from 'react-icons/fa'

function Home() {
  return (
    <main className='home-container'>
      {/* Hero */}
      <section className='hero-img'>
        <h1 className='hero-heading'>
          Don't be <span>Great</span> <br />
          Just be
          <span> Átlagos</span>
        </h1>
        <Button text='Become More' type='btn-primary' link='/sign-up' />
      </section>

      {/* Carousel */}
      <section className='carousel-container'>
        <h3 className='carousel-heading'>
          The Next Chapter <br />
          in History...
        </h3>

        <div className='carousel-cards-container'>
          <CarouselCard
            title='Learn More About Us'
            icon={<FaRegHandshake size={96} className='carousel-icon' />}
            type='primary'
            link='/about'
          />
          <CarouselCard
            title='Take a Peek at Our Work'
            icon={<FaProjectDiagram size={96} className='carousel-icon' />}
            type='secondary'
            link='/projects'
          />
          <CarouselCard
            title='Start the Grind'
            icon={<FaHiking size={96} className='carousel-icon' />}
            type='primary'
            link='/sign-up'
          />
        </div>
      </section>
    </main>
  )
}
export default Home
