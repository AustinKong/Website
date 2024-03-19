import { useEffect, useState } from 'react'

import style from '../index.module.css'

import fetchData from '../../../misc/weather.js'

const LocationCard = () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetchData().then(result => {
      setData(result.current)
    })
  }, [])

  return (
    <div
      className={style.card}
    >
      <h3
        className={style.title}
      >
        Location
      </h3>

      <p
        className={style.description}
        style={{
          color: 'var(--white)'
        }}
      >
        Singapore, Singapore <br />
        { data == null ? '00:00:00AM 0°C' : '' }
        {
          data == null ?
            '' :
            (data['time'] + " " + Math.round(data['temperature2m']) + '°C')
        }
      </p>

      <p
        className={style.description}
      >
        Here are my current whereabouts
      </p>
    </div>
  )
}

export default LocationCard