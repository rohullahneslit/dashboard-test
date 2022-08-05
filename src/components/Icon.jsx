import {icons} from '../assets/images'
const Icon = props => {
  const {src, width, height, className, onClick, imageClass} = props
  return (
    <div className={`${className}`}>
      <img
        alt="icon"
        src={icons[src]}
        width={width}
        height={height}
        onClick={onClick}
        className={`${imageClass}`}
      />
    </div>
  )
}

export default Icon
