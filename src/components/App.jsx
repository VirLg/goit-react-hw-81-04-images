import { Component, useState, useEffect } from 'react';
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

  // state = {
  //   showModal: false,
  //   searchValue: '',
  //   response: [],
  //   error: '',
  //   isLoading: false,
  //   page: 1,
  //   renderModal: '',
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.searchValue === this.state.searchValue ||
  //     this.state.searchValue === ''
  //   )
  //     return;

  //   this.handleSearch();
  //   this.setState({ page: 1 });
  // }

  useEffect(() => {
    handleSearch();
    setPage(1);
  }, [searchValue]);

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
      setPage(prevState => prevState + 1);
    }
  };

  const getRequestSearch = data => {
    setSearchValue(data.search);
  };
  const togleShowModal = () => {
    setShowModal(!showModal);
  };
  const changePage = async () => {
    //   this.setState(prevState => {
    //     console.log(prevState.page);
    //     return {
    //       page: prevState.page,
    //     };
    //   });
    //   await this.handleSearch();
  };
  const modalContent = largeImageURL => {
    if (largeImageURL) {
      setShowModal(!showModal);
      setRenderModal(largeImageURL);
    }

    // this.state.response.map();
  };

  // const { error, showModal, response, isLoading } = this.state;
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
      <Searchbar getSearch={getRequestSearch} />
      {showModal && (
        <ModalWindow onClose={togleShowModal}>
          <img src={renderModal} alt="" />
        </ModalWindow>
      )}
      {/* {response?.length === 0 && (
          <h2>Search is not found</h2>
        )} */}
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
      {response.length !== 0 && <Button changePage={changePage} />}
    </div>
  );
};

export default App;
