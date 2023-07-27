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
    <li key={id} onClick={() => returnId(largeImageURL)}>
      <img src={previewURL} alt={user} />
    </li>
  );
};
export default ImageItemGallery;
