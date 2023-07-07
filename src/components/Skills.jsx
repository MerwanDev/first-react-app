const Skills = ({ competences }) => {
    return (
      <div class="flex justify-center items-center">
        <article class="text-center rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 max-w-xs">
          <ul class="max-w-md space-y-1 list-inside">
            {competences.map((competence, index) => (
              <li class="text-center" key={index}>
                {competence.nom} - {competence.niveau}
              </li>
            ))}
          </ul>
        </article>
      </div>
    );
  };
  
  export default Skills;
  