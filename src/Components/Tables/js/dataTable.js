export const columnas = [
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
