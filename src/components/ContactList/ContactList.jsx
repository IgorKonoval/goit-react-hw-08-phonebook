import ContactItem from 'components/ListItem/ListItem';
import { List } from './ContactList.styled';
import {
  selectError,
  selectVisibleContacts,
} from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

import { Message } from 'components/App.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {!visibleContacts?.length && !error && (
        <Message>
          There are no contacts in your phonebook. Please add your first
          contact!
        </Message>
      )}
      <List>
        {visibleContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};
