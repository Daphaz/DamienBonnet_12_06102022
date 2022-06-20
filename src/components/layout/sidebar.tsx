/**
 * This is the Sidebar component for layout
 * @category Layout
 */
export const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <nav className='sidebar__nav'>
        <ul>
          <li>
            <img src='/svg/icon-profil.svg' alt='Profil' />
          </li>
          <li>
            <img src='/svg/icon-pool.svg' alt='Pool' />
          </li>
          <li>
            <img src='/svg/icon-bike.svg' alt='Bike' />
          </li>
          <li>
            <img src='/svg/icon-workout.svg' alt='Work' />
          </li>
        </ul>
      </nav>

      <div className='sidebar__copy'>
        <span>Copiryght, SportSee {new Date().getFullYear()}</span>
      </div>
    </aside>
  );
};
