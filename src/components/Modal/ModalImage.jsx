import { Button, Modal } from "flowbite-react";
const apiUrl = import.meta.env.VITE_IMG_URL;

/**
 * Componente ModalImage que muestra un modal con una galería de imágenes.
 * @param {Object} props - Las propiedades pasadas al componente.
 * @param {Array} props.imgs - Array de nombres de archivos de imágenes.
 * @param {boolean} props.openModal - Estado que controla la visibilidad del modal.
 * @param {function} props.setOpenModal - Función para actualizar el estado de visibilidad del modal.
 * @param {function} props.closeModal - Función para cerrar el modal.
 * @returns {JSX.Element} - El JSX del componente ModalImage.
 */

const ModalImage = ({ imgs, openModal, setOpenModal, closeModal }) => {
  return (
    <>
      <Modal show={openModal} onClose={() => closeModal()}>
        <Modal.Header>Imagenes</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {imgs.map((img, i) => {
              return (
                <img
                  key={i}
                  src={apiUrl + "/accommodation/" + img}
                  alt={`Image ${i}`}
                />
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeModal()}>Okey</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalImage;
