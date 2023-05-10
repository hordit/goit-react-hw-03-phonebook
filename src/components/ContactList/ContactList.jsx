import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { Li, Ul } from './ContactList.slyled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(contact => (
        <Li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
