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
    <div className="main-container flex flex-col md:flex-row">
      <AsideDatos
        className=""
        selectedTheme={selectedTheme}
        filterByTheme={filterByTheme}
      />
      <div className="w-full md:w-2/3">
        <div className="buscador max-w-md mx-auto mt-10">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Buscar datos
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
            <input
              value={search}
              onChange={searcher}
              placeholder="Buscar datos"
              className="form-control block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              type="search"
              id="default-search"
              required
            />
          </div>
        </div>

        {/* Mostrar resultados filtrados */}
        {filteredResults.map((user) => (
          <div className="flex flex-col items-center animate-fade" key={user.id}>
            <a
              href={`/datos/${user.slug}`}
              className="flex flex-col my-2 items-center rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100"
              target="_blank"
            >
              <img
                className="object-cover rounded-t-lg h-full md:w-60 md:rounded-none md:rounded-s-lg"
                src={`/img/tarjetas-datos/${user.img}`}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h4 className="font-rubik mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {user.nombre}
                </h4>
                <p className="font-rubik mb-2 text-sm tracking-tight text-sub-texto">
                  {user.autor}
                </p>
                <p className="font-rubik mb-2 text-base font-medium tracking-tight text-texto">
                  {user.descripcion}
                </p>
                <p className="font-rubik text-red-400">{user.tema}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buscador;
