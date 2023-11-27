import React, { useState } from "react";
import { ChatState } from "../../context/ChatProvider";
import SideDrawer from "../../components/miscellaneous/SideDrawer";
import Mychats from "../../components/Mychats";
import Chatbox from "../../components/Chatbox";

const Chats = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <div className="flex justify-between">
        {user && <Mychats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </div>
    </div>
  );
};

export default Chats;
