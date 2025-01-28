import css from '../css/BalanceNavLine.module.css';
import { useSelectedDate } from '../hooks/useSelectedDate';
import arrowIcon from '../images/arrow.png';
import { useBtnGoBack } from '../hooks/useBtnGoBack';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useBalance } from '../hooks/useBalance';
import { useState, useEffect } from 'react';
import WelcomeModal from './WelcomeModal';
import { useLocation } from 'react-router-dom';

const BalanceNavLine = () => {
  const { selectedDate, setSelectedDate, monthNames, currentDate } =
    useSelectedDate();

  const [errorMessage, setErrorMessage] = useState('');

  const handlePrevious = () => {
    setErrorMessage('');
    const previousDate = new Date(
      selectedDate.year,
      selectedDate.monthIndex - 1
    );
    setSelectedDate(previousDate);
  };

  const handleNext = () => {
    const todayDate = new Date(currentDate.year, currentDate.monthIndex);
    const nextDate = new Date(selectedDate.year, selectedDate.monthIndex + 1);
    if (
      nextDate.getFullYear() > todayDate.getFullYear() ||
      (nextDate.getFullYear() === todayDate.getFullYear() &&
        nextDate.getMonth() > todayDate.getMonth())
    ) {
      setErrorMessage('You cannot move forward');
      return;
    }
    setErrorMessage('');
    setSelectedDate(nextDate);
  };

  const { handleBack } = useBtnGoBack();

  const formatDate = (monthIndex, year) => {
    return `${monthNames[monthIndex]} ${year}`;
  };

  const { balanceShema, balance, setBalance } = useBalance();

  const [isWelcomeModalOpen, setWelcomeModalOpen] = useState(false);

  const [formBalance, setFormBalance] = useState({ balance: balance });

  useEffect(() => {
    setFormBalance({ balance: balance });
    if (balance === 0) {
      setWelcomeModalOpen(true);
    }
  }, [balance]);

  const closeWelcomeModal = () => {
    setWelcomeModalOpen(false);
  };

  const location = useLocation();

  return (
    <>
      {/* --------------- Go back btn*/}
      <div className={css.box}>
        {location.pathname !== '/transaction/expenses' && (
          <div className={css.back}>
            <button onClick={handleBack} className={css.goBackBtn}>
              <img src={arrowIcon} alt="Go Back" className={css.arrowIcon} />
              Main page
            </button>
          </div>
        )}
        <div className={css.toFlip}>
          {/* --------------- Balance */}
          <div className={css.balanceContainer}>
            <p className={css.balanceP1}>Balance</p>
            <Formik
              validationSchema={balanceShema}
              initialValues={formBalance}
              onSubmit={(values, actions) => {
                setBalance(values, actions);
                actions.resetForm({ values: { balance: '' } });
              }}
            >
              {({ values }) => (
                <Form className={css.balanceForm}>
                  <div style={{ position: 'relative' }}>
                    <Field
                      className={css.balanceInput}
                      type="text"
                      name="balance"
                      placeholder={
                        balance !== undefined ? balance.toString() : '0'
                      }
                    />
                    {values.balance === 0 && isWelcomeModalOpen && (
                      <div className={css.welcomeModalContainer}>
                        <WelcomeModal
                          isOpen={isWelcomeModalOpen}
                          onClose={closeWelcomeModal}
                          firstLine="Hello! To get started, enter the current balance of your account!"
                          secondLine="You can't spend money until you have it :)"
                        />
                      </div>
                    )}
                    <div className={css.errorMsg}>
                      <ErrorMessage name="balance" as="div" />
                    </div>
                  </div>
                  <button type="submit" className={css.balanceBtn}>
                    Confirm
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          {/* --------------- Data Selection */}
          {location.pathname !== '/transaction/expenses' && (
            <div className={css.dataNav}>
              <p>Current period:</p>
              <div className={css.dataArrows}>
                <button onClick={handlePrevious} className={css.arrowBtn}>
                  {'<'}
                </button>
                <span className={css.dataBold}>
                  {formatDate(selectedDate.monthIndex, selectedDate.year)}
                </span>
                <button onClick={handleNext} className={css.arrowBtn}>
                  {'>'}
                </button>
              </div>
              {errorMessage && (
                <p className={css.errorMessage}>{errorMessage}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BalanceNavLine;
