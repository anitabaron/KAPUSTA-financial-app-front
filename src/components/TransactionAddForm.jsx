import '../css/TransactionAddForm.css';
import calculator from '../images/calculator.svg';
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useTransactionAddForm } from '../hooks/useTransactionAddForm';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup'

const Option = ({ category }) => {
  return <option value={category} key={uuidv4()}>{category}</option>;
};

export default function TransactionAddForm({ activeSheet }) {
  const {category, addTransaction } = useTransactionAddForm();


  
  const selectCategory = category(activeSheet)

  const currentDate = new Date().toISOString().split('T')[0];

  const initialValues = {
    typeOfTransaction: activeSheet === 'expenses' ? 'expense' : 'income',
    description: "",
    amount: "",
    date: currentDate,
    category: "",
    owner: ""
  };

  const validationSchema = Yup.object({
    date: Yup.date()
      .required("Date is required")
      .max(new Date(), "Date cannot be in the future"),
    description: Yup.string()
      .required("Description is required")
      .min(3, "Description must be at least 3 characters")
      .max(10, "Description cannot be longer than 10 characters"),
    amount: Yup.number()
      .required("Amount is required")
      .positive("Amount must be a positive number")
      .typeError("Amount must be a number"),
    category: Yup.string()
      .required("Category is required")
  });

  return (
    <div className='transaction-add-form-container'>
      <Formik
        name="addTransaction"
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={ (values, actions ) => {
          addTransaction({values, activeSheet} )
          actions.resetForm();
        }}
      >
        {({ resetForm }) => (
          <Form className="transaction-add-form" name="addTransaction">
            <div className="transaction-add-form-data">
              <Field className="" type="date" name="date" />
              <div className='error-msg'>
                <ErrorMessage name="date" as='div' />
              </div>
            </div>

            <div className="transaction-add-form-desciption">
              <Field className="" type="text" name="description" placeholder="Product description" />
              <div className='error-msg'>
                <ErrorMessage name="description" as='div' />
              </div>
            </div>

            <div className="transaction-add-form-category">
              <Field
                name="category"
                as="select"
              >
                <option value="" disabled>Product category</option>
                {selectCategory.map((category) => <Option category={category} key={uuidv4()} />)}
              </Field>
              <div className='error-msg'>
                <ErrorMessage name="category" as='div' />
              </div>
            </div>

            <div className="transaction-add-form-amount">
              <div className="transaction-add-form-amount-container">
                <Field className="" type="text" name="amount" placeholder="0.00" />
                <img className="calculator-icon" src={calculator} alt="calculator" />
              </div>
              <div className='error-msg'>
                <ErrorMessage name="amount" as='div' />
              </div>
            </div>

            <div className='transaction-add-form-btn-box'>
              <button type="submit">INPUT</button>
              <button type="button" onClick={() => resetForm()}>CLEAR</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}