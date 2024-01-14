import { useDispatch } from 'react-redux';
import { ListItem, Button, ListItemPar } from './ListItem.styled';
import { deleteContact } from '../../redux/contacts/operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const removeContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      <ListItemPar>
        {name}: {number}
      </ListItemPar>
      <Button type="button" onClick={removeContact}>
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactItem;
