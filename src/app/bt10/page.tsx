import React from 'react'
import BaseCart from './BaseCart'
import BaseButton from './BaseButton'

export default function page() {
  return (
    <div>
        <BaseCart title='Áo phông nam' description='Áo phông nam mát mẻ' imageUrl='https://img.lazcdn.com/g/p/a7e67a6f97fa15f368e5d373d518e991.jpg_720x720q80.jpg' children = {<BaseButton children='Thêm vào giỏ hàng' type='primary'/>}></BaseCart>
    </div>
  )
}
