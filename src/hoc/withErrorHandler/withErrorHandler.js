import React, { Fragment } from "react";

import useHttpErrorHandler from "../../hooks/http-error-handler";

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error] = useHttpErrorHandler(axios);

    return (
      <Fragment>
        <h1>{error ? error.message : null}</h1>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;
