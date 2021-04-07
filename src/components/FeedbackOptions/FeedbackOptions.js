const Options = ({ handleIncrement }) => {
  return (
    <section>
      <button name="good" type="button" onClick={handleIncrement}>
        Good
      </button>
      <button name="neutral" type="button" onClick={handleIncrement}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={handleIncrement}>
        Bad
      </button>
    </section>
  );
};
export default Options;
