import '../styles/pages/palettes.sass'
import BigContainer from '../components/palettes/BigContainer'
import { useState } from 'react'
import { useEffect } from 'react'

const Palettes = () => {

  const [favoList, setFavoList] = useState([])  

  useEffect(() => {
    if(localStorage.getItem('palettes')) {
        setFavoList(JSON.parse(localStorage.getItem('palettes')))
        console.log(JSON.parse(localStorage.getItem('palettes')))
      }
  }, [])
  

  return (
    <div id='palettes'>
        <h1>Your palettes</h1>
        {favoList.length ? <BigContainer colorList={favoList} /> : <h3>You don't have favorite palettes</h3>}
    </div>
  )
}

export default Palettes