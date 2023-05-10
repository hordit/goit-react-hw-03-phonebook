import PropTypes from 'prop-types';
import { DivWrapper, InputFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <DivWrapper>
      <label>
        Fined contacts by name
        <InputFilter type="text" value={value} onChange={onChange} />
      </label>
    </DivWrapper>
  );
};

Filter.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
