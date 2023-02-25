import { useState, useEffect } from "react";

import "./WidgetLg.scss";
import AdminForm from "../AdminForm/AdminForm";
import Message from "../WidgetLg/message/message";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { userRequest } from "../../RequestMethods";

const WidgetLg = () => {
  const { user } = useAuthContext();
  const [toggle, setToggle] = useState(false);
  const [adminMessages, setAdminMessages] = useState(null);

  //FETCH ALL USERS
  useEffect(() => {
    const GetAllAdminMessages = async () => {
      try {
        const messages = await userRequest.get("/adminMessage");
        setAdminMessages(messages?.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    GetAllAdminMessages();
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Admin Messages</h3>
      <button onClick={() => setToggle(true)} className="adminMessageCreateBtn">
        Create
      </button>
      <Message adminMessages={adminMessages} user={user} />
      {toggle && <AdminForm user={user} setToggle={setToggle} />}
    </div>
  );
};

export default WidgetLg;
