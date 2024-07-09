import { useState, useEffect } from "react";
import { datasets } from "../../data/datasets.js";
import AsideDatos from "../../components/AsideDatos.jsx";

const Buscador = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [canForward, setCanForward] = useState(true);
  const [canBack, setCanBack] = useState(false);

  const showdatasets = () => {
    setUsers(datasets);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const filterByTheme = (theme) => {
    setCurrentPage(1);
    setSelectedTheme(theme);
  };

  const results = !search
    ? users
    : users.filter((dato) =>
        dato.nombre.toLowerCase().includes(search.toLowerCase())
      );

  // Filtrar resultados por tema seleccionado
  const filteredResults = selectedTheme
    ? results.filter((user) => user.tema === selectedTheme)
    : results;
  const limitePaginas = Math.ceil(filteredResults.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    if (pageNumber == 1) {
      setCanBack(false);
      setCanForward(true);
    }
    if (pageNumber > 1) setCanBack(true);
    if (pageNumber == limitePaginas) setCanForward(false);
    setCurrentPage(pageNumber);
  };
  const nextPage = (pagina) => {
    if (pagina + 1 == limitePaginas) setCanForward(false);
    if (pagina + 1 > 1) setCanBack(true);
    if (currentPage + 1 > limitePaginas) {
      setCanForward(false);
      return;
    }
    if (currentPage - 1 >= limitePaginas) setCanForward(false);

    setCurrentPage(currentPage + 1);
  };
  const previousPage = (pagina) => {
    if (pagina - 1 < limitePaginas) setCanForward(true);
    if (pagina - 1 == 1) setCanBack(false);
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    showdatasets();
  }, []);

  return (
    <div className="main-container flex flex-col lg:flex-row">
      <AsideDatos
        className=""
        selectedTheme={selectedTheme}
        filterByTheme={filterByTheme}
      />
      <div className="w-full lg:w-2/3">
        <div className="buscador max-w-md mx-auto mt-10">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Buscar datos
          </label>
          <div className="relative">
            <input
              value={search}
              onChange={searcher}
              placeholder="¿Qué datos estás buscando?"
              className="form-control block w-full p-4 ps-10 text-sm text-gray-900 border-b border-gray-300 focus:outline-none"
              type="search"
              id="default-search"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {currentItems.map((user) => (
            <a
              href={`/datos/${user.slug}`}
              className="flex flex-col h-300 my-5 mx-4 items-center rounded-lg shadow-lg sm:flex-row sm:min-w-xl sm:mx-0 hover:bg-gray-100 animate-fade"
              key={user.id}
            >
              <img
                className="object-cover sm:w-1/3 rounded-t-lg sm:rounded-none sm:rounded-s-lg w-full"
                src={`/img/tarjetas-datos/${user.img}`}
                alt={user.nombre}
              />
              <div className="flex flex-col p-4 sm:w-2/3">
                <h4 className="font-rubik mb-2 text-xl font-semibold tracking-tight text-gray-900">
                  {user.nombre}
                </h4>
                <p className="font-rubik mb-2 text-sm tracking-tight text-sub-texto">
                  {user.autor}
                </p>
                <p className="font-rubik mb-2 text-sm line-clamp-2 overflow-ellipsis font-light tracking-tight text-texto sm:max-w-xs sm:line-clamp-2 md:max-w-md">
                  {user.descripcion}
                </p>
                <div className="flex flex-col items-center ">
                  <p className="font-rubik border font-thin text-xs border-azul-ciudatos text-azul-ciudatos rounded-full py-1 px-2 mt-5">
                    {user.tema}
                  </p>
                </div>
              </div>
            </a>
          ))}
          {/* Paginador */}
          <div className="flex justify-center my-4">
            <button
              key="previous"
              onClick={() => previousPage(currentPage)}
              className={`mx-1 px-3 border bg-gray-200 text-gray-700 rounded ${
                !canBack ? "hidden" : ""
              }`}
            >
              <span className="material-symbols-outlined mt-2 ">
                arrow_back
              </span>
            </button>
            {Array.from({
              length: limitePaginas,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 border rounded  ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }   `}
              >
                {index + 1}
              </button>
            ))}
            <button
              key="next"
              onClick={() => nextPage(currentPage)}
              className={`mx-1 px-3 border bg-gray-200 text-gray-700 rounded ${
                !canForward ? "hidden" : ""
              }`}
            >
              <span className="material-symbols-outlined mt-2 ">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
