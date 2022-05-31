import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
// este boopstrap da en el carousel
import DataTable from "react-data-table-component";

import "./MyDataTable.css";
import Loader from "../Loader/Loader";
import PageError from "../Error/PageError";
import TableHeader from "./TableHeader";

import { columnas, paginationOptions } from "./js/dataTable";

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
    async function fetchNextPage() {
      try {
        const data = await fetch(API_URL);
        const response = await data.json();
        setApi(response.results);
      } catch (error) {}
    }
    fetchNextPage();
  };
  const handleClickPrev = () => {
    setnumberPage((numberPage = numberPage - 1));
    async function fetchPrevPage() {
      try {
        const data = await fetch(API_URL);
        const response = await data.json();
        setApi(response.results);
      } catch (error) {}
    }
    fetchPrevPage();
  };

  const PaginationTable = () => {
    return (
      <ul class="pagination justify-content-end">
        <div className="pagination-container">
          <li class="page-item" onClick={handleClickPrev}>
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item activw">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item" aria-current="page">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item" onClick={handleClickNext}>
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </div>
      </ul>
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
        dense
        direction="auto"
        highlightOnHover={true}
        columns={columnas}
        data={filter}
        striped={true}
        fixedHeader
        fixedHeaderScrollHeight="550px"
        noDataComponent={<h2>No se encontro ningun elemento</h2>}
        progressPending={state.loading}
        progressComponent={<Loader />}
        pagination
        //paginationComponentOptions={paginationOptions}
        paginationComponent={PaginationTable}
        paginationServer
        onChangeRowsPerPage={20}
        subHeader
        subHeaderComponent={
          <TableHeader changeButton={handleChangeButton} props={state.search} />
        }
        sortIcon={
          <img src="https://img.icons8.com/fluency-systems-regular/48/000000/sorting-arrows.png" />
        }
      />
    </div>
  );
};

export default MyDataTable;
