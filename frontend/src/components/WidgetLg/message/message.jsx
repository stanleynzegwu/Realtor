import { MdDeleteOutline } from "react-icons/md";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./message.scss";
import { UseDeleteAdminMessage } from "../../../Hooks/useApiRequest";
import { UseToggleVisibility, UseId } from "../../../Hooks/customHook";
import PopUpDeleteAction from "../../PopUpDeleteAction/PopUpDeleteAction";

const message = ({ adminMessages, user }) => {
  const { DeleteAdminMessage } = UseDeleteAdminMessage();
  const { toggle, setToggle } = UseToggleVisibility();
  const { id, setId } = UseId();

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
                <MdDeleteOutline
                  onClick={() => {
                    setId(_id);
                    setToggle(true);
                  }}
                />
              )}
              {toggle && id === _id && (
                <PopUpDeleteAction
                  value="message"
                  width=""
                  action={DeleteAdminMessage}
                  id={_id}
                  setToggle={setToggle}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default message;
