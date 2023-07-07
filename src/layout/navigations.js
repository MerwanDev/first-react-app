const Navigation = ({ children }) => {
  return (
    <>
        <header>
          <nav>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </nav>
        </header>
 
      {children}

      <footer>
        <p>&copy; 2023 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </>
  );
};

export default Navigation;
