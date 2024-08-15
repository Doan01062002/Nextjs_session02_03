import React from 'react'
import TextBox from './TextBox'

export default function page() {
  return (
    <div>
        <TextBox type="success" text="Success Text" />
        <TextBox type="info" text="Info Text" />
        <TextBox type="warning" text="Warning Text" />
        <TextBox type="error" text="Error Text" />
    </div>
  )
}
