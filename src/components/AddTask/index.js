// == Import
// npm
import PropTypesLib from 'prop-types';

import './addTask.scss';

// == Composant
function AddTask({ value, change, submit }) {
  return (
    <form
      className="form"
      onSubmit={submit}
    >
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={value}
        onChange={change}

      />
    </form>
  );
}

AddTask.propTypes = {
  value: PropTypesLib.string.isRequired,
  change: PropTypesLib.func.isRequired,
  submit: PropTypesLib.func.isRequired,
};

// == Export
export default AddTask;
