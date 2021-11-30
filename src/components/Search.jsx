var Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
//onchange - eventtargetvalue - allows us to get the query string that were passing back up to
// `var` declarations will only exist globally where explicitly defined
export default Search;
