import React from "react";

const SearchTable = ({ handleClickButton, props, handleChangeButton2 }) => {
  return (
    <div id="search-container">
      <h2>Lista de Alumnos</h2>

      <div className="search-bar">
        <p>
          <i class="material-icons">search</i>
          Buscar: 
        </p>
        <form>
          <input
            type="text"
            value={props}
            onChange={handleChangeButton2}
            className="z-depth-2"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchTable;
