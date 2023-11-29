import PropTypes from "prop-types";



function Kings (props) {
    return (<div>
<p>Name:{props.name}</p>,
      <p>Country:{props.country}</p>,
      <p>House:{props.house}</p>,
      <p>Years:{props.years}</p>,

    </div> );
}
Kings.propTypes={
    name:PropTypes.string.isRequired,
    country:PropTypes.string.isRequired,
    house:PropTypes.string.isRequired,
    years:PropTypes.string.isRequired,
}
export default Kings;







