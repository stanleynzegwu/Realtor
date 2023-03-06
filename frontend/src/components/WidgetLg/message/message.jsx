import { MdDeleteOutline } from "react-icons/md";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./message.scss";
import { UseDeleteAdminMessage } from "../../../Hooks/useApiRequest";

const message = ({ adminMessages, user }) => {
  const { DeleteAdminMessage, isLoading } = UseDeleteAdminMessage();

  return (
    adminMessages && (
      <div className="admin_messagesWrapper">
        {adminMessages.map(({ admin, createdAt, title, message, _id }) => (
          <div key={_id} className="admin_messages">
            <h2 className="message__title">{title}</h2>
            <div className="message__wrap">
              <img src={admin.img} alt="admin-avatar" className="admin_img" />
              <div className="adminSubHolder">
                <p className="message__message">{message}</p>
                <span className="message__createdAt">
                  {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
                </span>
              </div>

              {user?.data._id === admin._id && (
                <MdDeleteOutline disabled={isLoading} onClick={() => DeleteAdminMessage(_id)} />
              )}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default message;
