// == Import
//  npm
import PropTypesLib from 'prop-types';
// locaux
import Item from './Item';
import './tasksList.scss';

// == Composant
function TasksList({ tasks, handleChecked }) {
  return (
    <ul className="list">
      {
        tasks.map((task) => <Item key={task.id} {...task} handleChecked={handleChecked} />)
      }
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypesLib.arrayOf(
    PropTypesLib.shape({
      id: PropTypesLib.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleChecked: PropTypesLib.func.isRequired,
};

// == Export
export default TasksList;
