import "../../styles/components/palettes/color.sass";

const Color = ({ color }) => {
  function copyTo(e) {
    /* Get the text field */
    console.log(e)
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(e.textContent);
  
    /* Alert the copied text */
    alert("Copied the color: " + e.textContent);
  }

  return (
    <div id="color_container" style={{ backgroundColor: `${color}` }}>
      <div id="code" onClick={(e) => copyTo(e.target)}>{color}</div>
    </div>
  );
};

export default Color;
