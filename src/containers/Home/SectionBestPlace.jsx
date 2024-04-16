import { Accordion } from "flowbite-react";

const SectionBestPlace = () => {
  return (
    <Accordion collapseAll className="w-52">
      <Accordion.Panel>
        <Accordion.Title>Las mejores destinos turísticos</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Descubre los destinos más valorados por nuestros usuarios y
            planifica tu proximo viaje con nosotros.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Explora nuevas aventuras</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Encuentra inspiración en nuestra seleccion de los mejores destinos
            turísticos y comienza a planificar tu próxima escapada.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Vive experiencias únicas</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Sumérgete en culturas fascinantes y disfruta de momentos
            inolvidables en los destinos más destacados del mundo.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default SectionBestPlace;
