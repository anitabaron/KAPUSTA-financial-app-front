import "../css/Balance.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useBalance } from "../hooks/useBalance";
import { useState, useEffect } from "react";
import WelcomeModal from "./WelcomeModal";

export default function Balance() {

  const { balanceShema, balance, setBalance, getBalance } = useBalance();

  const [isWelcomeModalOpen, setWelcomeModalOpen] = useState(false);
  
  const [formBalance, setFormBalance] = useState({ 'balance': balance })

  useEffect(() => {
    setFormBalance({ balance: balance })
    if (balance === 0) {
      setWelcomeModalOpen(true);
    }
  }, [balance]);

  const closeWelcomeModal = () => {
    setWelcomeModalOpen(false);
  };
  return (
    <div className="balance-container">
      <p className="balance-p1">Balance</p>
      <Formik
        validationSchema={balanceShema}
        initialValues={formBalance}
        onSubmit={(values, actions) => {
          setBalance(values, actions);
          actions.resetForm({ values: { balance: "" } });
        }}
      >
        {({ values }) => (
          <Form className="balance-form">
            <div style={{ position: "relative" }}>
              <Field
                className="balance-input"
                type="text"
                name="balance"
                placeholder={balance !== undefined ? balance.toString() : "0"}
              />
              {values.balance === 0 && isWelcomeModalOpen && (
                <div className="welcome-modal-container">
                  <WelcomeModal
                    isOpen={isWelcomeModalOpen}
                    onClose={closeWelcomeModal}
                    firstLine="Hello! To get started, enter the current balance of your account!"
                    secondLine="You can't spend money until you have it :)"
                  />
                </div>
              )}
              <div className="error-msg">
                <ErrorMessage name="balance" as="div" />
              </div>
            </div>
            <button type="submit" className="balance-btn">
              Confirm
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
