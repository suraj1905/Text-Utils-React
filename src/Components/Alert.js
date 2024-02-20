import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function Alert(props) {
  return (
    <ToastContainer autoClose={1000} position="bottom-right" theme={props.mode}/>
  )
}
