import axios from "axios";
import history from "../utils/history";
import axiosWithAuth from "../utils/axiosWithAuth";

const employerRegisterEndPoint =
  "https://droom3.herokuapp.com/employer/auth/droom/api/register";
const employeeRegisterEndPoint =
  "https://droom3.herokuapp.com/employee/auth/droom/api/register";
const employerloginPoint =
  "https://droom3.herokuapp.com/employer/auth/droom/api/login";
const employeeloginPoint =
  "https://droom3.herokuapp.com/employee/auth/droom/api/login";
const employeeProfilePoint = "https://droom3.herokuapp.com/employee/droom/api/";
const employerProfilePoint = "https://droom3.herokuapp.com/employer/droom/api/";

export const registerEmployer = user => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .post(employerRegisterEndPoint, user)
      .then(res => {
        console.log("im res from employer register", res);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        history.push(`/employer/profile/${res.data.id}`);
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const registerEmployee = user => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .post(employeeRegisterEndPoint, user)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        history.push(`/employee/profile/${res.data.id}`);
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const signEmployer = user => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .post(employerloginPoint, user)
      .then(res => {
        dispatch({ type: SIGN_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        history.push(`/employer/profile/${res.data.id}`);
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const signEmployee = user => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .post(employeeloginPoint, user)
      .then(res => {
        dispatch({ type: SIGN_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        history.push(`/employee/profile/${res.data.id}`);
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const getEmployeeProfile = id => {
  return dispatch => {
    dispatch({ type: LOADING });
    axiosWithAuth()
      .get(employeeProfilePoint + id)
      .then(res => {
        dispatch({ type: PRO_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const getEmployerProfile = id => {
  return dispatch => {
    dispatch({ type: LOADING });
    axiosWithAuth()
      .get(employerProfilePoint + id)
      .then(res => {
        dispatch({ type: PRO_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const LOADING = "LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const ERROR = "ERROR";
export const SIGN_SUCCESS = "SIGN_SUCCESS";
export const PRO_SUCCESS = "EMP_PRO_SUCCESS";
