import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import {
  Form,
} from 'semantic-ui-react';

const Login = ({dispatch, authedUser, allUsers}) => {
  const myImageStyle = { width: '200px', height: '200px' };
  const [value, setValue] = useState("");
  const disabled = value === '' ? true : false;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setAuthedUser(e.target.value));
    setValue("");
    console.log(authedUser);
   // if (!id) {
   //   navigate("/");
   // }
  };

  return (
    <div>
      <h1 className="center">Employee Polls</h1>
      <div className="image-container">
        <img style={myImageStyle} src='/images/loginimg.png' alt="Login" />
      </div>
      <h2 className="center">Log In</h2>     
      <p className="center">User</p>
      <div>
      <Form onSubmit={handleSubmit}>
                  <Form.Dropdown
                    placeholder="Select a Friend"
                    fluid
                    selection
                    scrolling
                    options={allUsers}
                    value={value}
                    onChange={handleChange}
                    required
                  />
                  <Form.Button
                    content="Login"
                    disabled={disabled}
                    fluid
                    positive                           
                  />
                </Form>
      </div>
   </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  allUsers: Object.values(users).map((user) => ({
    key: user.id,
    text: user.name,
    value: user.id,
    image: { avatar: true, src: user.avatarURL }
  })),
  authedUser,
});

export default connect(mapStateToProps)(Login);
