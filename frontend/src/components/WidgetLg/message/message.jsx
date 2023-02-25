import "./message.scss";

const message = ({ adminMessages }) => {
  return (
    adminMessages &&
    adminMessages.map(({ admin, title, message, _id }) => <div key={_id}>{message}</div>)
  );
};

export default message;
