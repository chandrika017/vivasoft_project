import { LogoutIcon } from "@/assets/icons";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { userLoggedOut } from "../services/auth/authSlice";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../utils/constants";

const linkClass =
  "flex items-center gap-3 font-light px-3 py-2 hover:bg-neutral-700 hover:text-white hover:no-underline active:bg-neutral-600 rounded-sm text-base rounded-md";

export default function Sidebar() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };

  return (
    <div className="flex flex-col px-3 bg-slate-200 w-64">
      <div className="flex items-center gap-2 px-3 pt-4">
        <img src="./vivasoft-logo.png" alt="logo" className="w-6 h-auto" />
        <span className="text-xl text-black">vivasoft</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-slate-200 mb-3">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div
          className={classNames(linkClass, "cursor-pointer text-red-500")}
          onClick={logout}
        >
          <span className="text-xl">
            <LogoutIcon />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }: any) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? "bg-neutral-700 text-white" : "text-black",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
