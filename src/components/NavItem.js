import React from 'react'
import { Link } from 'react-router-dom';

function NavItem(props){
    return (
      <li className={props.claseLi}>
        <Link to={props.Link} className={props.claseA} id={props.idA}>
          <i className='fas fa-fw'>{props.fontAwe}</i>
          <span className={props.claseSpan}> {props.contenidoSpan}</span>
          <img className={props.claseImg} src={props.SrcImg} width={props.wImg} alt=''></img>
        </Link>
      </li>
    );
}

export default NavItem