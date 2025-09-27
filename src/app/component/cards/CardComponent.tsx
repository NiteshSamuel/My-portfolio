import React from "react";
import image from "../../../public/nodelogo.png";

function CardComponent(images: any, skillValue: string) {
  return (
    <div className="items-center justify-center ">
      <div className="cardContainer items-center justify-center">
        <img src={images.src}></img>
      </div>
      <div className="text-center p-3 text-wrap">
        <h3 className="text-3xl font-bold p-4 text-center">{skillValue}</h3>
      </div>
    </div>
  );
}

export default CardComponent;
