import React, { useState } from 'react'
import colorData from './color-data.json'
import ColorList from './ColorList'

const ColorApp = () => {
    const [colors] = useState(colorData)
  return (
    <div>
        <ColorList colors={colors}/>
    </div>
  )
}

export default ColorApp
