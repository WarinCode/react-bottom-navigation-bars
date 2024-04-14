import { AiOutlineHome } from "react-icons/ai";
import {
  IoChatbubblesOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import uuid from "react-uuid";

const model = {
  data: [
    {
      id: uuid(),
      text: "home",
      icon: <AiOutlineHome className="icon" />,
    },
    {
      id: uuid(),
      text: "chat",
      icon: <IoChatbubblesOutline className="icon" />,
    },
    {
      id: uuid(),
      text: "people",
      icon: <IoPersonOutline className="icon" />,
    },
    {
      id: uuid(),
      text: "search",
      icon: <IoSearchOutline className="icon" />,
    },
    {
      id: uuid(),
      text: "more",
      icon: <RxDashboard className="icon" />,
    },
  ],
  amount: 7
};

export default model;
