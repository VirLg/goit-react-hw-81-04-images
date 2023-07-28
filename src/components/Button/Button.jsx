const Button = ({ changePage }) => {
  console.log('changePage', changePage);
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
