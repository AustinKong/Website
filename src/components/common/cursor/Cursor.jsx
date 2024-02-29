import { useState, useEffect } from 'react';

import style from './cursorStyles.module.css'

const Cursor = ({ cursorState }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });


  // https://www.geeksforgeeks.org/custom-cursor-using-react-js/

  return (
    <div className={style.cursor} style={{ left: position.x, top: position.y }}>
      test
    </div>
  )
};

export default Cursor;