import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.imagesList}>
      {images.length !== 0 &&
        images.map(image => {
          return (
            <li key={image.id} className={css.imagesItem}>
              <ImageCard data={image} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
