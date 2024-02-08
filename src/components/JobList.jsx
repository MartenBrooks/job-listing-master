import { useDispatch, useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selector';
import { selectAllFilters } from 'store/filters/filters-selector';
import { addFilter } from 'store/filters/filters-actions';

const JobList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectAllFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, filters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
