import Generate from "../components/Generate";
import Container from "../components/palettes/Container";
import '../styles/pages/home.sass'
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const [manyColors, setManyColors] = useState(2)
  const [colors, setColors] = useState([]);
  const [showContainer, setShowContainer] = useState(false);

  const getColors = (numbers) => {
    
    setShowContainer(!showContainer)
    fetch(`https://x-colors.herokuapp.com/api/random/random?number=${numbers}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setColors(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (colors.length) {
      setShowContainer(true);
      console.log("Colors mudou!");
    }
  }, [colors]);

  return (
    <div id='home'>
      <input type="number" min='2' max='4' onChange={(e) => {
        setManyColors(e.target.value);
        console.log(e.target.value)
      }} />
      <Generate onClick={() => getColors(manyColors)} />
      {showContainer ? <Container colors={colors} fav={true}/> : <Loading />}
    </div>
  );
};

export default Home;
