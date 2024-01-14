import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormGroup, ErrorMessage } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';

import { addContact } from '../../redux/contacts/operations';
import Notiflix from 'notiflix';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

const ContactForm = ({ closeModal }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      Notiflix.Notify.failure(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, number }));
    Notiflix.Notify.success(
      `Contact with name ${name} has been added successfully to contacts list.`
    );
    resetForm();
    closeModal();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup>
          <h3>Name</h3>
          <Field
            name="name"
            type="text"
            placeholder="Enter a name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <ErrorMessage name="name" component="span" />
        </FormGroup>

        <FormGroup>
          <h3>Number</h3>
          <Field
            name="number"
            type="tel"
            placeholder="Enter a phone-number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
          <ErrorMessage name="number" component="span" />
        </FormGroup>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
