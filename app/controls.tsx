import { Dispatch, SetStateAction, FC } from 'react';
import Select from 'react-select';

interface ControlsProps {
  setSortKey: Dispatch<SetStateAction<string>>;
  setSortDirection: Dispatch<SetStateAction<string>>;
}

const Controls: FC<ControlsProps> = ({ setSortKey, setSortDirection }) => {
  const fieldOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Company', value: 'company' },
    { label: 'Email', value: 'email' },
  ];
  const directionOptions = [
    { label: 'Ascending', value: 'ascending' },
    { label: 'Descending', value: 'descending' },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={(newValue) => setSortKey(newValue?.value ?? '')}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={(newValue) => setSortDirection(newValue?.value ?? '')}
        />
      </div>
    </div>
  );
};

export default Controls;
