

import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';
export default function ActionButton({title, type,onClick, disabled, to}){
  
  const isMobile = useMediaQuery({ maxWidth: 767 })
  let className = 'action-btn'
  switch(type){
    case 'white': className = className + ' action-btn-w'; break;
  }
  return (
    <Link to={to}>
        <button className={className} onClick={onClick} disabled={disabled}>
            <p style={{color:'inherit'}}>{title}</p>
        </button>
    </Link>
  )
}
