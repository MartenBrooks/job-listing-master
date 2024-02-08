import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filters/filters-actions';
import { selectAllFilters } from 'store/filters/filters-selector';

const FilterPanel = () => {
  const filters = useSelector(selectAllFilters);
  const dispatch = useDispatch();

  if (filters.length === 0) return null;
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
              key={filter}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button
          className="link"
          onClick={() => dispatch(clearFilter())}
        >
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
