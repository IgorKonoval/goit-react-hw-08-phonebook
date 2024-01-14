import { Container, Section, SectionTitle } from 'components/App.styled';
import { ContactList } from '../components/ContactList/ContactList';
// import ContactForm from 'components/Form/Form';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import Filter from 'components/Filter/Filter';
import AddContact from 'components/AddContact/AddContact';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Section>
        <SectionTitle>Add contact</SectionTitle>
        <AddContact />
      </Section>
      <Section>
        <SectionTitle>Contacts</SectionTitle>

        <Filter />
        {isLoading && !error && <Loader />}

        <ContactList />
      </Section>
    </Container>
  );
};
export default ContactsPage;
