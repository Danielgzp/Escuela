import React, { useEffect, useMemo, useState } from "react";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";

import "./MyDataTable.css";
import Loader from "../Loader/Loader";
import PageError from "../Error/PageError";
import { Link } from "react-router-dom";

const columnas = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    reorder: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.name,
    sortable: true,
    reorder: true,
  },
  {
    name: "Estado",
    selector: (row) => row.status,
    sortable: true,
    reorder: true,
  },
  {
    name: "Especie",
    selector: (row) => row.species,
    sortable: true,
    reorder: true,
  },
  {
    cell: (row) => (
      <img height="56px" width="56px" alt={row.name} src={row.image} />
    ),
    name: "Imagen",
    selector: (row) => row.image,
    sorteble: true,
  },
  {
    cell: (row) => (
      <Link to={row.url} target="_blank" rel="noopener noreferrer">
        <i className="zmdi zmdi-account"></i>
      </Link>
    ),
    name: "Ver perfil",
    sorteble: true,
    reorder: true,
  },
];

const paginationOptions = {
  rowsPerPageText: "Filas por pagina",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const MyDataTable = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [api, setApi] = useState([]);
  let [numberPage, setnumberPage] = useState(1);
  const [search, setSearch] = useState("");
  const API_URL = `https://rickandmortyapi.com/api/character/?page=${numberPage}`;

  useEffect(() => {
    async function fetchData() {
      setState({
        loading: true,
        error: null,
      });
      try {
        const data = await fetch(API_URL);
        const response = await data.json();
        setState({
          loading: false,
          error: null,
        });
        setApi(response.results);
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, [numberPage]);

  const [filter, setFilter] = useState(api);

  useMemo(() => {
    const result = api.filter((student) => {
      return `${student.name}`.toLowerCase().includes(search.toLowerCase());
    });

    /*if (
      elemento.name
        .toString()
        .toLowerCase()
        .includes(terminoBusqueda.toLowerCase()) ||
      elemento.company.name
        .toString()
        .toLowerCase()
        .includes(terminoBusqueda.toLowerCase())
    ) {
      return elemento;
    }*/

    setFilter(result);
  }, [api, search]);

  const handleChangeButton = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    setnumberPage(numberPage = numberPage + 1);
    async function fetchChangePage() {
      try {
        const data = await fetch(API_URL);
        const response = await data.json();
        setApi(response.results);
      } catch (error) {}
    }
    fetchChangePage();
  };

  // if (state.loading) {
  //   return <Loader />;
  // }
  // if (state.error) {
  //   return <PageError />;
  // }

  return (
    <div className="table-responsive table-striped students-table">
      <button onClick={handleClick}>CAMBIA</button>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <button>
              <i class="material-icons prefix">search</i>
            </button>
            <input
              type="text"
              placeholder="Buscar..."
              value={state.search}
              onChange={handleChangeButton}
            />
          </div>
        </div>
      </form>
      <DataTable
        className="table-stripe"
        columns={columnas}
        data={filter}
        title="Lista de Alumnos"
        // paginationComponentOptions={paginationOptions}
        fixedHeader
        //theme="dark"
        striped={true}
        noDataComponent={<h2>No se encontro ningun elemento</h2>}
        progressPending={state.loading}
        progressComponent={<Loader />}
        pagination
        paginationServer
        paginationTotalRows={826}
        selectableRows
        onChangeRowsPerPage={20}
        onChangePage={handleClick}
        fixedHeaderScrollHeight="500px"
      />
      {/* <DataTable
        className="table-stripe"
        columns={columnas}
        data={filter}
        title="Lista de Alumnos"
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        //theme="dark"
        striped={true}
        noDataComponent={<h2>No se encontro ningun elemento</h2>}
        onColumnOrderChange={(cols) => console.log(cols)}
        progressPending={state.loading}
        progressComponent={<Loader />}
      /> */}
    </div>
  );
};

export default MyDataTable;
