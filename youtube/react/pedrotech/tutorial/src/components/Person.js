import PropTypes from "prop-types";

export const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} married.</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Friends:</h1>
        {props.friends.map((friend) => {
          return <h2> {friend} </h2>;
        })}
      </div>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
