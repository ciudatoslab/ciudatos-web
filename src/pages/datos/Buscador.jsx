import { useState, useEffect } from "react";
import { datasets } from "../../data/datasets.js";
import AsideDatos from "../../components/AsideDatos.jsx";

const Buscador = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(""); // Nuevo estado para el tema seleccionado

  const showdatasets = () => {
    console.log(datasets);
    setUsers(datasets);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // Función para filtrar por tema
  const filterByTheme = (theme) => {
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
          {/* Mostrar resultados filtrados */}
          {filteredResults.map((user) => (
            <a
              href={`/datos/${user.slug}`}
              className="flex flex-col h-300 my-5 mx-4 items-center rounded-lg shadow-lg sm:flex-row sm:min-w-xl sm:mx-0 hover:bg-gray-100 animate-fade"
              target="_blank"
              key={user.id}
            >
              <img
                className="object-cover sm:w-1/3 rounded-t-lg sm:rounded-none sm:rounded-s-lg w-full"
                src={`/img/tarjetas-datos/${user.img}`}
                alt=""
              />

              <div className="flex flex-col p-4 sm:w-2/3">
                <h4 className="font-rubik mb-2 text-xl font-semibold tracking-tight text-gray-900">
                  {user.nombre}
                </h4>
                <p className="font-rubik mb-2 text-sm tracking-tight text-sub-texto">
                  {user.autor}
                </p>
                <p className="font-rubik mb-2 text-sm line-clamp-2 overflow-ellipsis font-light tracking-tight text-texto sm:max-w-xs sm:line-clamp-2 sm:max-w-md">
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
        </div>
      </div>
    </div>
  );
};

export default Buscador;
