import { useState } from "react";

import "./WidgetLg.scss";
import AdminForm from "../AdminForm/AdminForm";
import Message from "../WidgetLg/message/message";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useRestContext } from "../../Hooks/useRestContext";
import { FadeUpAnimation } from "../UI/Animation/Animation";

const WidgetLg = () => {
  const { user } = useAuthContext();
  const { adminMessages } = useRestContext();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="widgetLg">
      <FadeUpAnimation className="widgetLgTitle">Admin Messages</FadeUpAnimation>
      <button onClick={() => setToggle(true)} className="adminMessageCreateBtn">
        Create
      </button>
      <Message adminMessages={adminMessages} user={user} />
      {toggle && <AdminForm user={user} setToggle={setToggle} />}
    </div>
  );
};

export default WidgetLg;
