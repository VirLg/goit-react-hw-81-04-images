import { Img, ImgItemLi } from './ImageItemGallery.styled';

const ImageItemGallery = ({
  id,
  pageURL,
  previewURL,
  user,
  modalContent,
  largeImageURL,
}) => {
  const returnId = value => {
    console.log(value);
    modalContent(value);
  };
  return (
    <ImgItemLi key={id} onClick={() => returnId(largeImageURL)}>
      <Img src={previewURL} alt={user} />
    </ImgItemLi>
  );
};
export default ImageItemGallery;
