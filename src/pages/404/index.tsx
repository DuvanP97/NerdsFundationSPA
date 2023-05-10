import * as React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = (): JSX.Element => {
  const history = useNavigate();

  const navegationHome = () => {
    history("/");
  };

  return (
    <React.Fragment>
      <h1>404 - error</h1>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={navegationHome}
        color="warning"
      >
        RETURN
      </button>
    </React.Fragment>
  );
};

export default NotFound;
