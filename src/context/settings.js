import {
  BiDollar,
  BiUser,
  BiPlus,
  BiPowerOff,
  BiShow,
  BiDotsVerticalRounded,
  BiReply,
} from "react-icons/bi";

export const APP_ICONS = {
  MONEY: <BiDollar />,
  USER: <BiUser />,
  PLUS: <BiPlus />,
  LOGOUT: <BiPowerOff />,
  SHOW: <BiShow />,
  VERTICALROUND: <BiDotsVerticalRounded />,
  BACK: <BiReply />,
};

export const ROUTES = [
  {
    path: "/",
    element: <WindowsScreen />,
  },
];
