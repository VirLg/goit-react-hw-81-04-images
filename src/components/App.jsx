import { useState, useEffect } from 'react';
import ModalWindow from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Api from './api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

const App = function () {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [renderModal, setRenderModal] = useState('');

  useEffect(() => {
    if (searchValue === '') return;
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const arr = await Api({
          value: searchValue,
          page: page,
        });
        setResponse(arr.data.hits);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [page, searchValue]);
  const getRequestSearch = data => {
    setSearchValue(data);
  };
  const togleShowModal = () => {
    setShowModal(!showModal);
  };
  const changePage = async () => {
    setPage(setPage => setPage + 1);
  };
  const resetpage = () => {
    setPage(1);
  };
  const modalContent = largeImageURL => {
    if (largeImageURL) {
      setShowModal(!showModal);
      setRenderModal(largeImageURL);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {isLoading && <h2>Загружаем...</h2>}
      {error && <h2>{error}</h2>}
      <Searchbar getSearch={getRequestSearch} resetpage={resetpage} />
      {showModal && (
        <ModalWindow onClose={togleShowModal}>
          <img src={renderModal} alt="" />
        </ModalWindow>
      )}
      {response?.length === 0 && <h2>Search is not found</h2>}
      <ul>
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
      </ul>
      {response.length !== 0 && <Button changePage={changePage} />}
    </div>
  );
};

export default App;
