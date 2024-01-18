// src/App.jsx
import React, { useState } from 'react';
import Step1Form from './Task/Step1Form';
import Step2Form from './Task/Step2Form';
import DatatablesList from './Task/DatatablesList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  submittedUsers: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_USER':
      return {
        ...state,
        submittedUsers: [...state.submittedUsers, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

const App = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };

  const handleSubmitStep2 = (data) => {
    // Dispatch action to save submitted user
    store.dispatch({ type: 'SUBMIT_USER', payload: data });
    // Move back to Step 1
    setStep(1);
  };

  return (
    <Provider store={store}>
      <div>
        {step === 1 ? (
          <Step1Form onNext={handleNext} />
        ) : (
          <Step2Form onSubmit={handleSubmitStep2} />
        )}
        <DatatablesList />
      </div>
    </Provider>
  );
};

export default App;
