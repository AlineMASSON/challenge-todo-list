// == Import
//  npm
import PropTypesLib from 'prop-types';

// == Composant
function Item({
  label,
  done,
  id,
  handleChecked,
}) {
  return (
    <li>
      <label className={done ? 'list-item list-item--done' : 'list-item'} htmlFor={id}>
        <input type="checkbox" checked={done} onChange={handleChecked} />
        {label}
      </label>
    </li>
  );
}

Item.propTypes = {
  label: PropTypesLib.string.isRequired,
  done: PropTypesLib.bool.isRequired,
  id: PropTypesLib.number.isRequired,
  handleChecked: PropTypesLib.func.isRequired,

};

// == Export
export default Item;
