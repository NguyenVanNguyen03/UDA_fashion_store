import { Link } from "react-router-dom";
import NavLink from "../client/NavLink";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export type DropDownItem = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  listDropDown: DropDownItem[];
};

export type Data = Category[];

const data: Data = [
  {
    id: "11",
    name: "Áo khoác",
    listDropDown: [
      {
        id: "22",
        name: "Áo khoác nỉ",
      },
      {
        id: "23",
        name: "Áo khoác dù",
      },
      {
        id: "24",
        name: "Áo khoác kaki",
      },
      {
        id: "25",
        name: "Áo khoác blazer nam",
      },
    ],
  },
  {
    id: "11",
    name: "Áo Thun",
    listDropDown: [
      {
        id: "22",
        name: "Áo khoác nỉ",
      },
      {
        id: "23",
        name: "Áo khoác dù",
      },
      {
        id: "24",
        name: "Áo khoác kaki",
      },
      {
        id: "25",
        name: "Áo khoác blazer nam",
      },
    ],
  },
  {
    id: "11",
    name: "Sơ mi",
    listDropDown: [
      {
        id: "22",
        name: "Áo khoác nỉ",
      },
      {
        id: "23",
        name: "Áo khoác dù",
      },
      {
        id: "24",
        name: "Áo khoác kaki",
      },
      {
        id: "25",
        name: "Áo khoác blazer nam",
      },
    ],
  },
  {
    id: "11",
    name: "Quần dài",
    listDropDown: [
      {
        id: "22",
        name: "Áo khoác nỉ",
      },
      {
        id: "23",
        name: "Áo khoác dù",
      },
      {
        id: "24",
        name: "Áo khoác kaki",
      },
      {
        id: "25",
        name: "Áo khoác blazer nam",
      },
    ],
  },
  {
    id: "11",
    name: "Quần short",
    listDropDown: [
      {
        id: "22",
        name: "Áo khoác nỉ",
      },
      {
        id: "23",
        name: "Áo khoác dù",
      },
      {
        id: "24",
        name: "Áo khoác kaki",
      },
      {
        id: "25",
        name: "Áo khoác blazer nam",
      },
    ],
  },
  {
    id: "11",
    name: "Áo khoác",
    listDropDown: [
      {
        id: "22",
        name: "Áo khoác nỉ",
      },
      {
        id: "23",
        name: "Áo khoác dù",
      },
      {
        id: "24",
        name: "Áo khoác kaki",
      },
      {
        id: "25",
        name: "Áo khoác blazer nam",
      },
    ],
  },
];

const Header = (): JSX.Element => {
  return (
    <div className="d-lg-flex flex-lg-column align-items-center">
      <div className="w-100 px-3 logo d-flex align-items-center justify-content-between">
        <div className="d-flex flex-grow-1 justify-content-lg-center justify-content-sm-start">
          <Link to="/">
            <img
              src="https://file.hstatic.net/1000096703/file/logo_website__191___70_px__979fdef210f7474d8a09b42724033b5c.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="d-flex gap-3">
          <FaUserCircle
            className="d-lg-block d-sm-none"
            fontSize={30}
            cursor={"pointer"}
          />
          <FiSearch fontSize={30} cursor={"pointer"} />
          <IoCartOutline fontSize={30} cursor={"pointer"} />
          <GiHamburgerMenu
            className="d-lg-none d-sm-block"
            fontSize={30}
            cursor={"pointer"}
          />
        </div>
      </div>
      <nav className="d-lg-flex d-sm-none gap-2 mt-4">
        {data.map((el, index) => {
          return (
            <NavLink
              key={index}
              id={el.id}
              name={el.name}
              listDropDown={el.listDropDown}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
