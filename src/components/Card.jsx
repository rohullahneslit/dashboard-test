const Card = props => {
  const {className, children} = props
  return (
    <div className={`bg-white p-4 border-border border-2 rounded-2xl   ${className}`}>
      {children}
    </div>
  )
}

export default Card
