import { useNavigate } from 'react-router-dom'

function CarouselCard({ title, icon, type, link }) {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(link)
  }

  return (
    <div
      className={
        type === 'primary'
          ? 'carousel-card carousel-card-primary'
          : ' carousel-card carousel-card-secondary'
      }
      onClick={onClick}
    >
      <h3 className='carousel-title'>{title}</h3>
      {icon}
    </div>
  )
}
export default CarouselCard
