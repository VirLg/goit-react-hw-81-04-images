import PropTypes from 'prop-types';
const Button = ({ changePage }) => {
  const change = () => {
    changePage();
  };
  return (
    <>
      <button onClick={change}>Load More!!!!!!!!!!!!</button>
    </>
  );
};
export default Button;
Button.propTypes = {
  changePage: PropTypes.func,
};
