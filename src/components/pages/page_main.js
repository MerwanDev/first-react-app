import React from 'react';
import Home from '../Home';
// import Projects from '../Projects';
import Skills from '../Skills';
import Experience from '../Experience';
import "../styles/main.css";

const Main = () => {
  return (
    <>

        <section class="text-gray-600 body-font">
          <section id="about">
            <Home
            prenom={"Merwan"}
            nom={"Laakad"}
            metier={"Dev. Fullstack"}
            presentation={"Bienvenue sur mon portfolio, je suis un développeur Fullstack, âgé de 22 ans. Passionné par le développement web, je suis spécialisé dans la création d'applications front-end et back-end."}
            img={"https://media.licdn.com/dms/image/C4D03AQEzdE0FySkDNA/profile-displayphoto-shrink_800_800/0/1635842326541?e=1694044800&v=beta&t=UQErKGm_g6O9KlKMeajGZ73ycywLr_PBn-iHNEQcds4"}
            />
          </section>
          <h2 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-5xl dark:text-black">Mes Experiences</h2>
          <section id="experience" >
            <Experience
              nomEntreprise={"WhenToCop?"}
              contrat={"Alternance"}
              metier={"Developpeur Fullstack"}
              dateDeDebut={"nov. 2022"}
              dateDeFin={"Aujourd'hui"}

            />
    
            <Experience
              nomEntreprise={"Optim'Ism"}
              contrat={"Stage"}
              metier={"Developpeur Web"}
              dateDeDebut={"janv. 2021"}
              dateDeFin={"févr. 2021 "}

            />
          </section>
          <section id="skills">
            <h2 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-5xl dark:text-black">Skills</h2>
            <Skills competences={[
              { nom: "Python", niveau: "Avancé" },
              { nom: "JavaScript / TypeScript", niveau: "Intermédiaire" },
              { nom: "Node.js", niveau: "Intermédiaire" },
              { nom: "SQL", niveau: "Intermédiaire" },
              { nom: "HTML", niveau: "Avancé" },
              { nom: "CSS3", niveau: "Avancé" },
            ]} />
          </section>
          
        </section>
     
    </>
  );
};

export default Main;
