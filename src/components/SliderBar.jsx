import { useState } from "react";
import { Label, RangeSlider, Tooltip } from "flowbite-react";

const SliderBar = ({ setSlider, maxPrice, slider }) => {
  const [sliderValue, setSliderValue] = useState([50]); // Valor inicial del rango

  const handleRangeChange = (event) => {
    setSliderValue([event.target.value]);
    // setSlider([event.target.value]);
  };

  return (
    <div>
      <div className="mb-1 block">
        <Label htmlFor="default-range" value="Precio" />
      </div>
      <Tooltip content={sliderValue} trigger="hover">
        {/* Utiliza el estado sliderValue para establecer el valor inicial del RangeSlider */}
        <RangeSlider
          id="default-range"
          value={sliderValue}
          max={maxPrice}
          onChange={handleRangeChange}
          onMouseUp={(event) => setSlider([event.target.value])}
        />
      </Tooltip>
      {/* Muestra el valor actual del rango seleccionado */}
    </div>
  );
};

export default SliderBar;
