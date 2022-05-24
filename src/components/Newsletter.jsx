import Button from './Button'

function Newsletter() {
  return (
    <div className='newsletter'>
      <h3 className='newsletter-title'>
        Sign up for our weekly newsletter <br />
        <span className='lead'>
          and stay up to date with everything going on in the business world
        </span>
      </h3>

      <form className='newsletter-form'>
        <input
          type='email'
          className='form-control'
          placeholder='Enter Email...'
        />

        <Button submit={true} text='Sign Up' type='btn-secondary' link='#' />
      </form>
    </div>
  )
}
export default Newsletter
