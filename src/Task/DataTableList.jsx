// DatatablesList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

const DatatablesList = () => {
  const submittedUsers = useSelector((state) => state.submittedUsers);

  const columns = [
    { name: 'Name', selector: 'name', sortable: true },
    { name: 'Age', selector: 'age', sortable: true },
    { name: 'Sex', selector: 'sex', sortable: true },
    { name: 'Address', selector: 'address', sortable: true },
    { name: 'State', selector: 'state', sortable: true },
    { name: 'City', selector: 'city', sortable: true },
    { name: 'Country', selector: 'country', sortable: true },
    { name: 'Pincode', selector: 'pincode', sortable: true },
   
  ];

  return (
    <DataTable
      title="Submitted Users"
      columns={columns}
      data={submittedUsers}
    />
  );
};

export default DatatablesList;
