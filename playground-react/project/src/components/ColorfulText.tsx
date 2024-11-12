import React from 'react';

interface ColorfulText {
  texto: string;
  size: string;
}

const ColorfulText: React.FC<ColorfulText> = ({ texto, size }) => {
  const cores = ["#1686b6", "#f67751", "#729c44", "#ffcb47"];
  let sz = "text-lg"

  switch(size) {
    case "medio":
        sz = "text-md";
        break;
    case "grande":
        sz = "text-lg";
        break;
    case "giga":
        sz="text-8xl";
        break;
  }

  return (
    <div className="flex justify-center items-center">
      {texto.split("").map((letra, index) => (
        <span
          key={index}
          style={{ color: cores[index % cores.length] }}
          className= {`font-comico drop-shadow-lg text-center ${sz}`}
        >
          {letra}
        </span>
      ))}
    </div>
  );
};

export default ColorfulText;
