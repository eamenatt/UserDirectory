//API call to get employee data to poplate our table
import axios from "axios";

var employeeNum = 500;

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=" + employeeNum + "&nat=us");
  }
};
