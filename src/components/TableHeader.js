import React, { useContext } from "react";
import DataBody from "./DataBody";
import DataContext from "../utils/DataContext";
import "./styles.css";

const TableHeader = () => {
  const context = useContext(DataContext);

  return (

    <div className="datatable">
      <table
        id="table"
        className="table"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}>
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody />
      </table>
    </div>
  );
}

export default TableHeader;
