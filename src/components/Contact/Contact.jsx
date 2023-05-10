import PropTypes from 'prop-types';
import { P, ButtonDelete, Div } from './Contact.styled';

export const Contact = ({
    contact: { id, name, number }, onDelete
}) => {
    return <Div>
        <P>{name}: {number}</P>
        <ButtonDelete aria-label="Delete" onClick={() => onDelete(id)}>Delete</ButtonDelete>
    </Div>
};

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired
};

