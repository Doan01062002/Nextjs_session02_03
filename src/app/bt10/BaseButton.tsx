import React from 'react'
import "./BaseCart.scss"

export default function BaseButton({children, type}:{children:string, type:string}) {
  return (
    <div className="product-card__button">{children}</div>
  )
}
