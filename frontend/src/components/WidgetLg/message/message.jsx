import { MdDeleteOutline } from "react-icons/md";

import "./message.scss";

const message = ({ adminMessages, user }) => {
  return (
    adminMessages && (
      <div className="admin_messagesWrapper">
        {adminMessages.map(({ admin, title, message, _id }) => (
          <div key={_id} className="admin_messages">
            <h2 className="message__title">{title}</h2>
            <div className="message__wrap">
              <img src={admin.img} alt="admin-avatar" className="admin_img" />
              <p className="message__message">{message}</p>
              {user?.data._id === admin._id && <MdDeleteOutline />}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default message;
