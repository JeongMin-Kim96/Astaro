import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getMessageList } from "@features/messageSlice/messageListSlice";
import MessageRoom from "@/component/message/MessageRoom";

const MessageRoomList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const MessageListPage = () => {
  const [messageRooms, setMessageRooms] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMessageList()).then((data) => {
        console.log(data.payload); // 첫번째 payload 출력
        setMessageRooms(data.payload);
    });
  }, []);
    
  return (
      <MessageRoomList>
        {messageRooms.map((messageRoom, index) => (
          <MessageRoom
            key={index}
            messageRoom={messageRoom}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setMessageRooms={setMessageRooms}
          />
        ))}
      </MessageRoomList>
  );
};

export default MessageListPage;