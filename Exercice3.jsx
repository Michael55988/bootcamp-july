import React from "react";
import './Exercice.css'

function Exercice3() {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
  return (
    <>
      <h1 style={style_header}>mon titre</h1>
      <p className='para'>paragraphe</p>
      <a href="http://google.com">un lien</a>
      <ul>
        <li>une liste</li>
        <li>suite liste</li>
      </ul>
      <form> <input type="text" /> <button> valide</button> </form>
      <img src='https://picsum.photos/200/300'></img>

    </>
  );
}

export default Exercice3;
