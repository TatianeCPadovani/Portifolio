import React, { useEffect } from 'react';
import "./MovingText.css";

function Text(props) {
  useEffect(() => {
    function activateLetter(element) {
      const arrText = element.innerHTML.split("");
      element.innerHTML = "";

      arrText.forEach((letter, i) => {
        setTimeout(() => {
          element.innerHTML += letter;
        }, 75 * i)
      });
    }

    const writing = document.querySelector('.textPresentation');
    activateLetter(writing);
  }, []);

  return (
    <h1 className="textPresentation">
        
                {props.text}
             
    </h1>
  );
}

export default Text;
