import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ chosenImage, closeModal, modalIsOpen }) => {
  Modal.setAppElement('#root');
  return (
    <>
      {chosenImage !== null && (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={`${css.modal} ${css.Scroll}`}
          >
            <div className={css.container}>
              <button
                type="button"
                onClick={closeModal}
                className={css.closeBtn}
              >
                X
              </button>
              <img
                src={chosenImage.urls.regular}
                alt={chosenImage.alt_description}
                className={css.image}
              />
              <div className={css.descriptionWrapper}>
                <h2 className={css.description}>{chosenImage.description}</h2>
                <p className={css.likes}>Likes: {chosenImage.likes}</p>
                <p className={css.author}>Author: {chosenImage.user.name}</p>
                <p className={css.bio}>
                  Bio: {chosenImage.user.bio || 'Sorry, there is no bio :('}
                </p>
                <button
                  type="button"
                  onClick={() => window.open(chosenImage.links.download)}
                  className={css.downloadBtn}
                >
                  Download
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default ImageModal;
