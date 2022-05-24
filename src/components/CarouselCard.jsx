import { useNavigate } from 'react-router-dom'

function CarouselCard({ title, icon, type }) {
  return (
    <div
      className={
        type === 'primary'
          ? 'carousel-card carousel-card-primary'
          : ' carousel-card carousel-card-secondary'
      }
    >
      <h3 className='carousel-title'>{title}</h3>
      {icon}
    </div>
  )
}
export default CarouselCard
