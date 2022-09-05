import '../../styles/components/palettes/bigcontainer.sass'
import Container from '../../components/palettes/Container'
import { useState, useEffect } from 'react'

const BigContainer = ({ colorList }) => {

  return (
    <div id='big'>
      {colorList.map((cl) => (
        <Container colors={cl} fav={false} index={cl[0].index}/>
      ))}
    </div>
  )
}

export default BigContainer