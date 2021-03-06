import React, { useState, useEffect } from "react";
import API from "../utils/API";
import DataContext from "../utils/DataContext";
import "./styles.css";
import SearchBar from "./Searchbar";
import TableHeader from "./TableHeader";

//Constructing table and declaring headers
const TableContents = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "Employee Photo", width: "15%", order: "descend" },
      { name: "Full Name", width: "10%", order: "descend" },
      { name: "Phone Number", width: "20%", order: "descend" },
      { name: "Email Address", width: "20%", order: "descend" },
      { name: "Birthday", width: "10%", order: "descend" }
    ]
  });

  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter(item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      console.log(filter, values)
    if(values.indexOf(filter.toLowerCase()) !== -1){
      return item
    };
    });

    setDeveloperState({ ...developerState, filteredUsers: filteredList });
  };
  
  useEffect(() => {
    API.getUsers().then(results => {
      console.log(results.data.results);
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
    
  });

  return (
    <DataContext.Provider
      value={{ developerState, handleSearchChange }}
    ><SearchBar/>
      <div className="data-area">
        {developerState.filteredUsers.length > 0 ? <TableHeader /> : <div></div>}
      </div>
    </DataContext.Provider>
  );
};

export default TableContents;
