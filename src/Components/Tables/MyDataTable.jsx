import React, { useEffect, useMemo, useState } from "react";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";
import DataTable from "react-data-table-component";

import "./MyDataTable.css";
import Loader from "../Loader/Loader";
import PageError from "../Error/PageError";
import { Link } from "react-router-dom";
import SearchTable from "./SearchTable";

const columnas = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    reorder: true,
    style: {
      backgroundColor: "rgba(187, 204, 221, 1)",
    },
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
      <a href={row.url} target="_blank" rel="noopener noreferrer">
        <i className="zmdi zmdi-account"></i>
      </a>
    ),
    name: "Ver perfil",
    sorteble: true,
    reorder: true,
  },
];

const paginationOptions = {
  rowsPerPageText: "",
  rangeSeparatorText: "of",
  noRowsPerPage: false,
  selectAllRowsItem: true,
  selectAllRowsItemText: "All",
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
  let lastPage = document.getElementById("pagination-last-page");

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
  const handleClickNext = () => {
    setnumberPage((numberPage = numberPage + 1));
    async function fetchChangePage() {
      try {
        const data = await fetch(API_URL);
        const response = await data.json();
        setApi(response.results);
      } catch (error) {}
    }
    fetchChangePage();
  };
  const handleClickPrev = () => {
    setnumberPage((numberPage = numberPage - 1));
    async function fetchChangePage() {
      try {
        const data = await fetch(API_URL);
        const response = await data.json();
        setApi(response.results);
      } catch (error) {}
    }
    fetchChangePage();
  };
  const PaginationComponent = () => {
    return (
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Next onClick={handleClickNext} />
      </Pagination>
    );
  };

  // if (state.loading) {
  //   return <Loader />;
  // }
  // if (state.error) {
  //   return <PageError />;
  // }

  return (
    <div className="table-responsive students-table z-depth-3">
      <DataTable
        columns={columnas}
        data={filter}
        title=""
        paginationComponentOptions={paginationOptions}
        fixedHeader
        striped={true}
        noDataComponent={<h2>No se encontro ningun elemento</h2>}
        progressPending={state.loading}
        progressComponent={<Loader />}
        pagination
        paginationComponent={PaginationComponent}
        paginationIconNext={<text onClick={handleClickNext}>Next</text>}
        paginationIconPrevious={<text onClick={handleClickPrev}>Previus</text>}
        paginationIconFirstPage={
          <i className="material-icons icon-white">fast_rewind</i>
        }
        paginationIconLastPage={
          <i className="material-icons icon-white">fast_forward</i>
        }
        paginationServer
        paginationTotalRows={826}
        selectableRows
        onChangeRowsPerPage={20}
        fixedHeaderScrollHeight="500px"
        subHeader
        subHeaderComponent={
          <SearchTable
            handleClickButton={handleClickNext}
            handleChangeButton2={handleChangeButton}
            props={state.search}
          />
        }
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
