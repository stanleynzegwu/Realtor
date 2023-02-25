import { useState, useEffect } from "react";

import "./WidgetLg.scss";
import AdminForm from "../AdminForm/AdminForm";
import Message from "../WidgetLg/message/message";
import { userRequest } from "../../RequestMethods";

const WidgetLg = () => {
  const [adminMessages, setAdminMessages] = useState(null);
  console.log(adminMessages);
  //FETCH ALL USERS
  useEffect(() => {
    const GetAllAdminMessages = async () => {
      try {
        const Messages = await userRequest.get("/adminMessage");
        setAdminMessages(Messages?.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    GetAllAdminMessages();
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Admin Messages</h3>
      <Message adminMessages={adminMessages} />
      <AdminForm />
    </div>
  );
};

export default WidgetLg;
