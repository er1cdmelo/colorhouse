import "../../styles/components/palettes/container.sass";
import Color from "./Color";
import { AiOutlineStar, AiFillStar, AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const Container = ({ colors, fav, index }) => {
  const [favorite, setFavorite] = useState(false);
  const [showContainer, setShowContainer] = useState(true)

  useEffect(() => {
    setFavorite(false);
  }, [colors]);

  const saveFavorite = () => {
    if (localStorage.getItem("palettes")) {
      setFavorite(!favorite);
      const palettes = JSON.parse(localStorage.getItem("palettes"));
      colors[0].index = palettes.length
      favorite ? palettes.pop() : palettes.push(colors);
      localStorage.setItem("palettes", JSON.stringify(palettes));
    } else {
      setFavorite(!favorite);
      const palettes = [];
      colors[0].index = palettes.length
      palettes.push(colors);
      localStorage.setItem("palettes", JSON.stringify(palettes));
    }
  };

  const unfavorite = () => {
    const palettes = JSON.parse(localStorage.getItem('palettes'))
    palettes.splice(palettes.findIndex(p => p[0].index ===index))
    localStorage.setItem('palettes', JSON.stringify(palettes))
    setShowContainer(!showContainer)
  }

  return (
    <>
      {showContainer && (
        <div id="container">
        {fav ? (
          <div onClick={() => saveFavorite()} id={`favorite${favorite}`}>
            {favorite ? <AiFillStar /> : <AiOutlineStar />}
          </div>
        ) : (
          <div id="remove" onClick={() => unfavorite()}><AiFillDelete /></div>
        )}
        {colors.map((c) => (
          <Color color={c.hex} />
        ))}
      </div>
      )}
    </>
  )
};

export default Container;
