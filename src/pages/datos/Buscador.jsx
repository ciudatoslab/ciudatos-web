import { useState, useEffect } from 'react';
import {datasets} from '../../data/datasets.js'; 
const Buscador = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
  
    const showdatasets = () => {
      console.log(datasets);
      setUsers(datasets);
    };
  
    const searcher = (e) => {
      setSearch(e.target.value);
    };
  
    const results = !search
      ? users
      : users.filter((dato) =>
          dato.nombre.toLowerCase().includes(search.toLowerCase())
        );
  
    useEffect(() => {
      showdatasets();
    }, []);
  
    return (
      <div>
          
      <div class="max-w-md mx-auto mt-10 " >
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Busar datos</label>
      <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input         value={search}
          onChange={searcher}
          placeholder="Buscar datos"
          className="form-control" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"  required />
         
     
      </div>
   </div>
  
  
        {results.map((user) => (
          <div class="py-5">
            <a
              href={user.old_url}
              class="flex flex-col items-center rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100"
            >
              <img
                class="object-cover rounded-t-lg h-full md:w-60 md:rounded-none md:rounded-s-lg"
                src={user.img}
                alt="Map{}"
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h4 class="font-rubik mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {user.nombre}
                </h4>
                <p class="font-rubik mb-2 text-sm tracking-tight text-sub-texto">
                  {user.autor}
                </p>
                <p class="font-rubik mb-2 text-base font-medium tracking-tight text-texto">
                  {user.descripcion}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default Buscador;
  