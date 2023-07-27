import { Component } from 'react';
import ModalWindow from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Api from './api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    showModal: false,
    searchValue: '',
    response: [],
    error: '',
    isLoading: false,
    page: 1,
    renderModal: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue === this.state.searchValue ||
      this.state.searchValue === ''
    )
      return;

    this.handleSearch();
    this.setState({ page: 1 });
  }
  handleSearch = async () => {
    try {
      this.setState({ isLoading: true });
      const arr = await Api({
        value: this.state.searchValue,
        page: this.state.page,
      });
      this.setState({ response: arr.data.hits });
    } catch (error) {
      this.setState({ error: error.message });
      console.log(error);
    } finally {
      this.setState({
        isLoading: false,
        page: this.state.page + 1,
      });
    }
  };

  getRequestSearch = data => {
    this.setState({
      searchValue: data.search,
    });
  };
  togleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  changePage = async () => {
    this.setState(prevState => {
      console.log(prevState.page);
      return {
        page: prevState.page,
      };
    });
    await this.handleSearch();
  };
  modalContent = largeImageURL => {
    if (largeImageURL) {
      this.setState({
        showModal: !this.state.showModal,
        renderModal: largeImageURL,
      });
    }

    // this.state.response.map();
  };
  render() {
    const { error, showModal, response, isLoading } =
      this.state;
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
        <Searchbar getSearch={this.getRequestSearch} />
        {showModal && (
          <ModalWindow onClose={this.togleShowModal}>
            <img src={this.state.renderModal} alt="" />
          </ModalWindow>
        )}
        {/* {response?.length === 0 && (
          <h2>Search is not found</h2>
        )} */}
        {response?.map(
          ({
            id,
            pageURL,
            previewURL,
            user,
            largeImageURL,
          }) => (
            <ImageGallery
              key={id}
              pageURL={pageURL}
              previewURL={previewURL}
              user={user}
              id={id}
              largeImageURL={largeImageURL}
              modalContent={this.modalContent}
            />
          )
        )}
        {response.length !== 0 && (
          <Button changePage={this.changePage} />
        )}
      </div>
    );
  }
}
export default App;
