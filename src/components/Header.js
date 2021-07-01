import React from 'react'
import Button from './Button'
//import PropTypes from 'prop-types'



const Header = ({ title, onAdd ,showAdd}) => {
    const onClick = ()=>{
        console.log("click");
    }
    return (
       <header className='header'>
           <h1> {title} </h1>
        <Button color={showAdd ? 'red': 'green'} text={ showAdd ? 'Close': 'Add'} onClick={onAdd}></Button>
       </header> 
    )
}
 
/*Default props 
Header.defaultProps = {
    title: 'Task Tracker',
}*/
export default Header
