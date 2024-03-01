const SocialMediaIcon = ({ icon, link, alt, size }) => {
  // Size in REM
  const style = {
    width: `${size}rem`,
    height: `${size}rem`,
  }

  return (
    <a href={link} target='blank'>
      <img src={icon} alt={alt} style={style}/>
    </a>
  )
}

export default SocialMediaIcon