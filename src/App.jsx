import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

import { useState, useEffect, useRef } from 'react';
import { fetchImagesWithQuery } from './images-api';

import css from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [chosenImage, setChosenImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const btnRef = useRef();

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoader(true);
        const response = await fetchImagesWithQuery(query, page);
        setImages(prevImages => [...prevImages, ...response.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchImages();
  }, [setImages, query, page]);

  function onSubmit(searchQuery) {
    setImages([]);

    setQuery(searchQuery);
    setPage(1);
  }

  function loadMore() {
    setPage(prevPage => prevPage + 1);
    btnRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function openModal(data) {
    setModalIsOpen(true);
    setChosenImage(data);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setModalIsOpen(false);
    setChosenImage(null);
    document.body.style.overflow = 'auto';
  }

  return (
    <div className={css.wrapper}>
      <SearchBar onSubmit={onSubmit} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loader && <Loader />}
      {images.length > 0 && !loader && (
        <LoadMoreBtn loadMore={loadMore} ref={btnRef} />
      )}
      <ImageModal
        chosenImage={chosenImage}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

export default App;
