import "./styles/SearchForm.scss";

const SearchForm = (): JSX.Element => {
  return (
    <div className="search-form position-fixed p-4 end-0 top-0 bottom-0">
      <h1 className="title">Tìm kiếm</h1>
      <input type="text" />
    </div>
  );
};

export default SearchForm;
