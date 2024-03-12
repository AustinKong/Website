import StackedItem from "./StackedItem.jsx"

import style from './index.module.css'

const StackedList = ({ primary, secondary, hiddenPrimary, hiddenSecondary }) => {
  return (
    <ul
      className={style.stackedList}
    >
      {
        primary.map((item, index) => (
          <StackedItem
            key={index}
            primary={item}
            secondary={secondary[index]}
            hiddenPrimary={hiddenPrimary[index]}
            hiddenSecondary={hiddenSecondary[index]}
          />
        ))
      }
    </ul>
  )
}

export default StackedList