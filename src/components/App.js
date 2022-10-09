import { useEffect, Fragment } from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";

const App = ({dispatch, loading}) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
      {loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Login />} />
          </Routes>
      )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);