import { Sidebar } from "flowbite-react";
import SliderBar from "../../components/SliderBar";
import { useEffect, useState } from "react";
import { getAccommodationExpensive } from "../../services/accommodationApi";

const SectionFilterAccommodation = () => {
  // Estado para almacenar el valor del rango seleccionado
  const [slider, setSlider] = useState(50); // Valor inicial del rango
  const [maxPrice, setMaxPrice] = useState(100); // Valor maximo del rango
  // Función para manejar cambios en el rango


  useEffect(() => {
    const fetchAccommodationExpensive = async () => {
      const response = await getAccommodationExpensive();
      setMaxPrice(response); // Establece el valor máximo del rango basado en la respuesta
    };

    fetchAccommodationExpensive();
  }, []);

  return (
    <div className="flex justify-center">
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="border rounded-md border-black"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse label="E-commerce">
              <SliderBar
                slider={slider}
                maxPrice={maxPrice}
                setSlider={setSlider}
              />
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SectionFilterAccommodation;
