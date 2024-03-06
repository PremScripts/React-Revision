import React from 'react'

function Alert(props) {
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.msg}</strong><b>  {props.alert.type}</b>
</div>
  )
}

export default Alert  
