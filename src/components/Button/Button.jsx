import PropTypes from 'prop-types';
const Button = ({ changePage }) => {
  const change = () => {
    changePage();
  };
  return (
    <>
      <button
        onClick={change}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        }}
      >
        Load More!!!!!!!!!!!!
      </button>
    </>
  );
};
export default Button;
Button.propTypes = {
  changePage: PropTypes.func,
};
