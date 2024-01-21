import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Category } from "../common/Header";
import { screenUrl } from "../../constants/screenUrls";
import "./styles/NavLink.scss";

const NavLink = (props: Category): JSX.Element => {
  const { name, listDropDown, urlCollections }: Category = props;

  return (
    <li className="navlink position-relative">
      <div className="d-flex align-items-center">
        <Link to={`/collections/${urlCollections}`}>{name}</Link>
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
