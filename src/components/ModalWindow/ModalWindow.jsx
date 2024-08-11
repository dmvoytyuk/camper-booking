import Modal from "react-modal";
import styles from "./ModalWindow.module.css";
import svg from "../../assets/icons.svg";

const customStyles = {
  content: {
    backgroundColor: "#fff",
    width: "982px",
    margin: "0 auto",
    borderRadius: "20px",
    border: "none",
    paddingTop: "40px",
    paddingBottom: "40px",
    padding: "40px 0",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(17,18,19,0.1)",
  },
};

Modal.setAppElement("#root");

const ModalWindow = ({ modalIsOpen, setModalIsOpen, closeModal, camper }) => {
  return (
    <Modal
      bodyOpenClassName="noScroll"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
      style={customStyles}
    >
      <button
        className={styles.modalCloseButton}
        type="button"
        onClick={() => closeModal()}
      >
        <svg className={styles.modalCloseButtonIcon}>
          <use xlinkHref={svg + "#icon-close"} />
        </svg>
      </button>
      <div className={styles.modalTop}>
        <h2>{camper.name}</h2>
        <div>
          <p>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <p>{camper.location}</p>
          <h2>{camper.price}</h2>
        </div>
      </div>
      <div className={styles.modalBottom}>
        <ul className={styles.modalGallery}>
          {camper.gallery.map((item, i) => (
            <li className={styles.modalGalleryItem} key={i}>
              <img
                className={styles.modalGalleryImg}
                src={camper.gallery[i]}
                alt={camper.name}
              />
            </li>
          ))}
        </ul>
        <p>{camper.description}</p>
      </div>
    </Modal>
  );
};

export default ModalWindow;
