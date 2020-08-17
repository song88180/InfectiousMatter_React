import React from 'react';

function ScrollamaBody(props){
  return(
    <div>
      This is ScrollamaBody
      {props.children}
      {console.log(props.children)}
    </div>
  )
}
export default ScrollamaBody;
