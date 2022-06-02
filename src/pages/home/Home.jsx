import React from 'react';
import Form from '../../components/form/Form';

const Home = () => {
    return (
        <main aria-labelledby="page-title">
        <h2 tabIndex="0" id="page-title">
          Add an employee
        </h2>
        <Form />
      </main>
    );
};

export default Home;