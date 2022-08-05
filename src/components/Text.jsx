const Text = props => {
  const {variant, className, style, text} = props

  switch (variant) {
    case 'blueheading':
      return <h1 className={`text-blue font-bold text-3xl  ${className}`}>{text}</h1>
    case 'blackheading':
      return <h2 className={`font-bold ${className}`}>{text}</h2>
    case 'graytext':
      return <p className={`text-gray-text ${className}`}>{text}</p>
    case 'greentext':
      return <p className={`text-green ${className}`}>{text}</p>
    default:
      return (
        <p className={` ${className}`} style={style}>
          {text}
        </p>
      )
  }
}

export default Text
