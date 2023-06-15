import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

const GenerateBtn = (props) => {
  const [palletes, setPalletes] = useState([]);

  function createNewColorset() {
    const val = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    let newPalletes = [];

    for (let i = 0; i < 5; i++) {
      let hexCode = "";
      //for to loop 6 times to get 6vals of hex
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * val.length);
        hexCode += val[index];
      }
      newPalletes.push("#" + hexCode);
    }
    setPalletes(newPalletes);
  }

  useEffect(() => {
    props.toggleColor(palletes);
  }, [palletes]);

  //Generate on spacebar
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        createNewColorset();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return <Button onClick={createNewColorset}>Generate</Button>;
};

export default GenerateBtn;
