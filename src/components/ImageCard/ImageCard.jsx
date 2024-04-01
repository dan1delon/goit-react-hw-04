import css from './ImageCard.module.css';

const ImageCard = ({ data, openModal }) => {
  return (
    <div className={css.wrapper}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        onClick={() => openModal(data)}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
