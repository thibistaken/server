import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

// export const fetchCredits = () => async (dispatch) => {
//   const response = await axios.get("api/credits");
//   console.log("Request sent to server!");
//   dispatch({ type: FETCH_CREDITS, payload: response.data });
//   console.log("Response received from server!");
// };

export const handleStripeToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
