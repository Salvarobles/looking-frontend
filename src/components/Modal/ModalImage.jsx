import { Button, Modal } from "flowbite-react";
const apiUrl = import.meta.env.VITE_IMG_URL;

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
