import PropTypes from "prop-types";



function Kings (props) {
    return (<div>
<p>Name:{props.name}</p>,
      <p>Country:{props.country}</p>,
      <p>House:{props.house}</p>,
      <p>Years:{props.years}</p>,

    </div> );
}
King.propTypes={
    name:PropTypes.string.isrequired,
    country:PropTypes.string.isrequired,
    house:PropTypes.string.isrequired,
    years:PropTypes.string.isrequired,
}
export default King;