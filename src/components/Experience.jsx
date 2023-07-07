const Experience = ({ nomEntreprise, contrat, metier, dateDeDebut, dateDeFin }) => {
  return (
    <div class="flex justify-center">
      <article class="text-align-center rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <p>
          <h3 class="mt-0.5 text-lg font-medium text-gray-900">
            {nomEntreprise} - <strong>{contrat}</strong> - {metier}
          </h3>
        </p>

        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {dateDeDebut} - {dateDeFin}
        </p>
        <br></br>
      </article>
      
    </div>
  );
};

export default Experience;
