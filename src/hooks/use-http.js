import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      user: state.user,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      user: state.user,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      user: state.user,
      status: "completed",
    };
  }
};

function useHttp(requestFunction) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: null,
    user: {
      image: "/assets/user-images/default.jpg",
      name: "Mukhammadali",
      username: "mukhammadalime",
    },
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });

      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData: responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
