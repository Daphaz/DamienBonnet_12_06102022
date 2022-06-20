/**
 * This is the header component for layout
 * @category Layout
 */
export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src='/svg/logo.svg' alt='SportSee' />
      </div>

      <nav className='header__nav'>
        <ul>
          <li>
            <a href='#?'>Acceuil</a>
          </li>
          <li>
            <a href='#?'>Profil</a>
          </li>
          <li>
            <a href='#?'>Réglage</a>
          </li>
          <li>
            <a href='#?'>Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
