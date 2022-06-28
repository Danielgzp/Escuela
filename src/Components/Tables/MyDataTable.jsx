import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// este boopstrap da en el carousel
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

import "./MyDataTable.css";
import Loader from "../Loader/Loader";
import PageError from "../Error/PageError";
import TableHeader from "./TableHeader";

import { columnas, paginationOptions } from "./js/dataTable";

const API_URL = `https://rickandmortyapi.com/api/character/?page=2`;

const MyDataTable = (props) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    api: [],
    filter: []
  });

  const [api, setApi] = useState([]);
  let [numberPage, setnumberPage] = useState(1);
  const [search, setSearch] = useState("");

  
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
          ...state,
          loading: false,
          error: null,
          api: response.results,
          filter: state.api
        });
      } catch (error) {
        setState({ loading: false, error: error });
      }
    }
    fetchData();
  }, []);

  const [filter, setFilter] = useState(state.api);

  useMemo(() => {
    const result = state.api?.filter((student) => {
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
    // setFilter(result);
    setState({...state, filter: result})
  }, [state.api, search]);

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

    const handleDeleteStudent = async (e) => {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas eliminar este Estudiante?",
        icon: "warning",
        showDenyButton: "true",
        confirmButtonText: "Sí, deseo eliminar el estudiante",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteStudent();
          setState({ loading: true });
        } else if (result.isDenied) {
          Swal.fire("Cancelado", "", "info");
        }
      });
    };

    async function deleteStudent(e) {
      console.log("fUNCIONA")
      const send = JSON.stringify(props.match.params.cedula);

      const answer = await fetch(
        `http://localhost/escuela/api/deleteStudent/cedula`,
        {
          method: "POST",
          body: send,
        }
      );
      const answer_json = await answer.json();

      if (answer_json) {
        if (answer_json === "S") {
          Swal.fire("El Estudiante se ha eliminado correctamente", "", "success");

          props.history.push("/");
        } else {
          Swal.fire("Oops", answer_json, "error");
        }
      } else {
        Swal.fire("Oops", "Ha ocurrido un error. Intente nuevamente.", "error");
      }
    }

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
      <div className="table-pagination">
        <div className="pagination-button">
          <a onClick={""}>Pre-Escolar</a>
        </div>
        <ul className="pagination right">
          <div className="pagination-container">
            <li className="page-item" onClick={handleClickPrev}>
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item activw">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item" onClick={handleClickNext}>
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </div>
        </ul>
      </div>
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
        columns={columnas(handleDeleteStudent)}
        data={state.filter}
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
