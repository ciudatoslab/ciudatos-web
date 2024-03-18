import React from 'react';

const AsideDatos = ({ selectedTheme, filterByTheme }) => {
  return (
    <aside className="w-full md:w-1/3 bg-gray-200 pl-4 pt-4 mr-8">
    <h3 className="font-rubik text-lg font-bold mb-2">Temas </h3>
    <hr className="border-gray-400 flex-grow mr-4" />

    
    <ul>
      {/* Botones para filtrar por tema */}
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'División administrativa' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('División administrativa')}
        >
          División administrativa
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Agua' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Agua')}
        >
          Agua 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Calidad de vida' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Calidad de vida')}
        >
          Calidad de vida 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Ciudatos' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Ciudatos')}
        >
          Ciudatos 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Cultura y Educación' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Cultura y Educación')}
        >
          Cultura y Educación 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Desastres naturales' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Desastres naturales')}
        >
          Desastres Naturales 
        </button>
      </li>

      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Economía' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Economía')}
        >
          Economía 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Educación' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Educación')}
        >
          Educación 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Inseguridad ciudadana' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Inseguridad ciudadana')}
        >
          Inseguridad Ciudadana 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Medio Ambiente' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Medio Ambiente')}
        >
          Medio Ambiente 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Educación' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Educación')}
        >
          Educación 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Movilidad y transporte' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Movilidad y transporte')}
        >
          Movilidad y Transporte 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Población' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Población')}
        >
          Población 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Salud' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Salud')}
        >
          Salud 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Servicios básicos' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Servicios básicos')}
        >
          Servicios Básicos 
        </button>
      </li>
      <li>
        <button
          className={`bg-gray-200 rounded-full px-3 py-1 m-1 focus:outline-none ${selectedTheme === 'Tecnología' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          onClick={() => filterByTheme('Tecnología')}
        >
          Tecnología 
        </button>
      </li>
      {/* Agrega más botones según sea necesario para otros temas */}
    </ul>
  </aside>
  );
};

export default AsideDatos;
