import Button from '../components/Button'

function Home() {
  return (
    <main className='home-container'>
      <div className='hero-img'>
        <h1 className='hero-heading'>
          Don't be <span>Great</span> <br />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just be
          <span> Átlagos</span>
        </h1>
        <Button text='Become More' type='btn-primary' link='/sign-up' />
      </div>
    </main>
  )
}
export default Home
