import "./PopUpDeleteAction.scss";

const PopUpDeleteAction = ({ value, width, action, id, setToggle }) => {
  const styles = {
    width: width,
  };

  return (
    <div style={styles} className="popUpDeleteAction">
      <p className="popUpActionText">Are you sure you want to delete this {value} ?</p>
      <div className="popUpBtnWrapper">
        <button
          onClick={() => {
            action(id);
            setToggle(false);
          }}
          className="popUpBtn popUpBtnDelete"
        >
          Delete
        </button>
        <button onClick={() => setToggle(false)} className="popUpBtn popUpBtnCancel">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopUpDeleteAction;
