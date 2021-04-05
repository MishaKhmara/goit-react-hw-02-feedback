const Options = ({ onGood, onNeutral, onBad }) => {
  return (
    <section>
      <button name="good" type="button" onClick={onGood}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={onBad}>
        Bad
      </button>
    </section>
  );
};
export default Options;
