import {
  BoxIcon,
  CartIcon,
  InfoIcon,
  MessageIcon,
  PeopleIcon,
  SettingsIcon,
  TransactionIcon,
} from "@/assets/icons";
import SquaresIcon from "@/assets/icons/squares";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <SquaresIcon />,
  },
  {
    key: "users",
    label: "Users",
    path: "/users",
    icon: <PeopleIcon />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <BoxIcon />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <CartIcon />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <TransactionIcon />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <MessageIcon />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <InfoIcon />,
  },
];
