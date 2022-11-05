export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  openModal,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};
