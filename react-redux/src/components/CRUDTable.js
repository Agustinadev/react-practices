import React from "react";
import {CRUDTableRow} from "./CRUDTableRow";

export const CRUDTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Data's table</h3>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Line:</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
             data.map((el) => (
              <CRUDTableRow
              key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              ></CRUDTableRow>
            ))
          ) : (
            <tr>
            <th>No hay datos</th>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
