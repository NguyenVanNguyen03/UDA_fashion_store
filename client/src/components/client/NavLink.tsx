import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./styles/NavLink.scss";
import { Category } from "../common/Header";
import { screenUrl } from "../../constants/screenUrls";

const NavLink = (props: Category): JSX.Element => {
  const { name, listDropDown, url }: Category = props;
  return (
    <li className="navlink position-relative">
      <div className="d-flex align-items-center">
        <Link to={`/collections${url}`}>{name}</Link>
        {listDropDown.length !== 0 ? (
          <RiArrowDropDownLine className="btn-dropDown d-flex" fontSize={30} />
        ) : (
          <div></div>
        )}
      </div>
      <ul className="dropDown__wrapper position-absolute">
        {listDropDown.map((category, index) => {
          return (
            <Link key={index} to={`${screenUrl.COLLECTIONS}/${category.name}`}>
              {category.name}
            </Link>
          );
        })}
      </ul>
    </li>
  );
};

export default NavLink;
