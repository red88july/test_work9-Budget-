import '../../style.css';

const SpinnerBig = () => {
  return (
    <div className="spinner-big">
      <div
        className="spinner-border text-primary"
        style={{width: "6rem", height: "6rem"}}
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerBig;