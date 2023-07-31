import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ModalWindow from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Api from './api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Ul, AppDiv } from './App.styled';

const App = function () {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [renderModal, setRenderModal] = useState('');
  const [renderLoadMore, setRenderLoadMore] = useState(false);
  useEffect(() => {
    if (searchValue === '') return;
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const arr = await Api({
          value: searchValue,
          page: page,
        });
        arr.data.hits.length > 10
          ? setRenderLoadMore(true)
          : setRenderLoadMore(false);

        if (arr.data.hits.length === 0)
          return Notify.failure('Sorry, search is not found.');
        setResponse(prev => [...prev, ...arr.data.hits]);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [page, searchValue]);
  const getRequestSearch = data => setSearchValue(data);

  const togleShowModal = () => setShowModal(!showModal);

  const changePage = async () => setPage(setPage => setPage + 1);

  const resetpage = () => {
    setPage(1);
    setResponse([]);
  };

  const modalContent = largeImageURL => {
    if (largeImageURL) {
      setShowModal(!showModal);
      setRenderModal(largeImageURL);
    }
  };

  return (
    <AppDiv
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {error && <h2>{error}</h2>}
      <Searchbar getSearch={getRequestSearch} resetpage={resetpage} />
      {showModal && (
        <ModalWindow onClose={togleShowModal}>
          <img
            src={renderModal}
            alt=""
            style={{
              height: '100%',

              // margin-right: 'auto',
            }}
          />
        </ModalWindow>
      )}
      <Ul>
        {response?.map(({ id, pageURL, previewURL, user, largeImageURL }) => (
          <ImageGallery
            key={id}
            pageURL={pageURL}
            previewURL={previewURL}
            user={user}
            id={id}
            largeImageURL={largeImageURL}
            modalContent={modalContent}
          />
        ))}
      </Ul>
      {isLoading && <h2>Загружаем...</h2>}
      {renderLoadMore && <Button changePage={changePage} />}
    </AppDiv>
  );
};

export default App;
