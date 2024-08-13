import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye } from '@fortawesome/free-solid-svg-icons'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

export default function page() {
  return (
    <div className='w-50 h-50'>
        <h5 className='text-sky-500'>Label</h5>
        <input className='w-30 h-10 border-solid relative' type="text" placeholder='Placehol..'/>
        <FontAwesomeIcon className='absolute top-8 left-20' style={{color:"black", height:"20px", width:"15px"}} icon={faEye}></FontAwesomeIcon>
        <p>Helpel text</p>
    </div>
  )
}
