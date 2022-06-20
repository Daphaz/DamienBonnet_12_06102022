export type KeyDataItemProps = {
  iconSrc: string;
  color?: 'primary' | 'blue' | 'yellow' | 'pink';
  name: string;
  title: string;
  subtitle: string;
};

export type ListKeyDataProps = {
  items: KeyDataItemProps[];
};

/**
 * This is the key data item component
 * @category Widget
 */
export const KeyDataItem = ({
  color = 'primary',
  name,
  iconSrc,
  subtitle,
  title,
}: KeyDataItemProps): JSX.Element => (
  <li className='list-key-data__item'>
    <div className='list-key-data__container'>
      <div className={`list-key-data__icon ${color}`}>
        <img src={iconSrc} alt={name} />
      </div>

      <div className='list-key-data__content'>
        <h3 className='list-key-data__title'>{title}</h3>
        <p className='list-key-data__subtitle'>{subtitle}</p>
      </div>
    </div>
  </li>
);

/**
 * This is the list key data component
 * @category Widget
 */
export const ListKeyData = ({ items }: ListKeyDataProps): JSX.Element => {
  return (
    <ul className='list-key-data'>
      {items.map((item) => (
        <KeyDataItem key={`key-data-item-${item.name}`} {...item} />
      ))}
    </ul>
  );
};
