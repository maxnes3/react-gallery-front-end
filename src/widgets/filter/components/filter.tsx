import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';
import { Select } from '../../select';
import { FilterStateType, togglePanel } from '../../../shared/filter';
import {
  ButtonDefault,
  ButtonIcon,
  ButtonStatus,
  SizeParams,
} from '../../button';
import '../styles/_filter.module.scss';

function Filter() {
  const iconSize: SizeParams = { width: 16, height: 16 };
  const dispatch = useDispatch();
  const panelState = useSelector(
    (state: FilterStateType) => state.filter.panel,
  );

  const closePanel = (event: FormEvent) => {
    event.preventDefault();
    dispatch(togglePanel());
  };

  const handleApplyFilters = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleClearFilters = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    panelState && (
      <div className="filter">
        <div className="panel background-primary">
          <div className="cancel">
            <ButtonIcon
              imageUrl="/cross.default.icon.svg"
              backgroundSize={40}
              iconSize={iconSize}
              onClick={closePanel}
            />
          </div>
          <Select title="Artist" />
          <Select title="Location" />
          <Select title="Years" />
          <div className="actions">
            <ButtonDefault
              title="Show the results"
              onClick={handleApplyFilters}
              status={ButtonStatus.default}
            />
            <ButtonDefault
              title="clear"
              onClick={handleClearFilters}
              status={ButtonStatus.disable}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default Filter;
