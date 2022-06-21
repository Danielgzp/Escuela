import { Link } from "react-router-dom";

export const columnas = [
  {
    name: "Grado",
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
    name: "Apellidos",
    selector: (row) => row.surname,
    sortable: true,
    reorder: true,
  },
  {
    name: "Sexo",
    selector: (row) => row.gender,
    sortable: true,
    reorder: true,
  },
  {
    // cell: (row) => (
    //   <img height="56px" width="56px" alt={row.name} src={row.image} />
    // ),
    name: "Fecha de Nacimiento",
    selector: (row) => row.birth_date,
    sorteble: true,
    reorder: true,
  },
  {
    selector: (row) => row.address,
    name: "Lugar de Nacimiento",
    sortable: true,
    reorder: true,
  },
  {
    name: "C.I Escolar",
    selector: (row) => row.ci,
    sortable: true,
    reorder: true,
  },
  {
    name: "Direccion",
    selector: (row) => row.addres,
    sortable: true,
    reorder: true,
  },
  {
    name: "Nombre del representante",
    selector: (row) => row.r_name,
    sortable: true,
    reorder: true,
  },
  {
    name: "C.I Representante",
    selector: (row) => row.r_ci,
    sortable: true,
    reorder: true,
  },
  {
    name: "Telefonos",
    selector: (row) => row.personal_phone,
    sortable: true,
    reorder: true,
  },
  {
    name: "Correo",
    selector: (row) => row.email,
    sortable: true,
    reorder: true,
  },
  {
    name: "Vivienda",
    selector: (row) => row.address,
    sortable: true,
    reorder: true,
  },
  {
    cell: (row) => (
      <Link
        to={`/admin/fasfaga/${row.ci}`
          .toLowerCase()
          .replaceAll(" ", "-")
          .normalize("NFD")
          .replace(/[?¿¡!\u0300-\u036f]/g, "")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="material-icons">account_box</i>
      </Link>
    ),
    name: "Ver perfil",
    selector: (row) => row.species,
    sortable: true,
    reorder: true,
  },
  {
    cell: (row) => (
      <a href={row.url} target="_blank" rel="noopener noreferrer">
        <i className="material-icons">delete</i>
      </a>
    ),
    name: "Eliminar",
    selector: (row) => row.species,
    sortable: true,
    reorder: true,
  },
];

export const paginationOptions = {
  rowsPerPageText: "",
  rangeSeparatorText: "of",
  noRowsPerPage: false,
  selectAllRowsItem: true,
  selectAllRowsItemText: "All",
};

// export const Paginationn = ({prev, next}) => {
//   return (
//     <ul class="pagination justify-content-end">
//       <div className="pagination-container">
//         <li class="page-item" onClick={prev}>
//           <a class="page-link">Previous</a>
//         </li>
//         <li class="page-item activw">
//           <a class="page-link" href="#">
//             1
//           </a>
//         </li>
//         <li class="page-item" aria-current="page">
//           <a class="page-link" href="#">
//             2
//           </a>
//         </li>
//         <li class="page-item">
//           <a class="page-link" href="#">
//             3
//           </a>
//         </li>
//         <li class="page-item" onClick={next}>
//           <a class="page-link" href="#">
//             Next
//           </a>
//         </li>
//       </div>
//     </ul>
//   );
// };
