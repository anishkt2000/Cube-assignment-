import React, { useState, useEffect } from 'react';
import CustomerList from './components/customerList';
import CustomerDetails from './components/customerDetails';
import { Customer } from './types';
import './styles/App.css';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const customerData: Customer[] = [
        { id: 1, name: 'John Doe', title: 'CEO', address: '1234 Elm Street', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,photos: [], },
        { id: 2, name: 'Jane Smith', title: 'CTO', address: '5678 Oak Street', photos: [], description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 3, name: 'Alice Johnson', title: 'CFO', address: '9102 Pine Street', photos: [], description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 4, name: 'Bob Brown', title: 'CMO', address: '1123 Maple Avenue', photos: [], description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 5, name: 'Carol White', title: 'COO', address: '1456 Birch Road', photos: [], description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 6, name: 'John Doe', title: 'CEO', address: '1234 Elm Street', description: 'ans jnd' ,photos: [], },
        { id: 7, name: 'Jane Smith', title: 'CTO', address: '5678 Oak Street', photos: [], description: 'knqsfdn edskn' },
        { id: 8, name: 'Alice Johnson', title: 'CFO', address: '9102 Pine Street', photos: [], description: 'knsdlc ndsjfnedjh' },
        { id: 9, name: 'Bob Brown', title: 'CMO', address: '1123 Maple Avenue', photos: [], description: 'ndjfdf  jdsfj' },
        { id: 10, name: 'Carol White', title: 'COO', address: '1456 Birch Road', photos: [], description: 'djnf jebdfjd' },
        { id: 11, name: 'John Doe', title: 'CEO', address: '1234 Elm Street', description: 'ans jnd' ,photos: [], },
        { id: 12, name: 'Jane Smith', title: 'CTO', address: '5678 Oak Street', photos: [], description: 'knqsfdn edskn' },
        { id: 13, name: 'Alice Johnson', title: 'CFO', address: '9102 Pine Street', photos: [], description: 'knsdlc ndsjfnedjh' },
        { id: 14, name: 'Bob Brown', title: 'CMO', address: '1123 Maple Avenue', photos: [], description: 'ndjfdf  jdsfj' },
        { id: 15, name: 'Carol White', title: 'COO', address: '1456 Birch Road', photos: [], description: 'djnf jebdfjd' },
        { id: 16, name: 'John Doe', title: 'CEO', address: '1234 Elm Street', description: 'ans jnd' ,photos: [], },
        { id: 17, name: 'Jane Smith', title: 'CTO', address: '5678 Oak Street', photos: [], description: 'knqsfdn edskn' },
        { id: 18, name: 'Alice Johnson', title: 'CFO', address: '9102 Pine Street', photos: [], description: 'knsdlc ndsjfnedjh' },
        { id: 19, name: 'Bob Brown', title: 'CMO', address: '1123 Maple Avenue', photos: [], description: 'ndjfdf  jdsfj' },
        { id: 20, name: 'Carol White', title: 'COO', address: '1456 Birch Road', photos: [], description: 'djnf jebdfjd' },
    
      ];
      setCustomers(customerData);
      setSelectedCustomerId(customerData[0]?.id || null); 
    };

    fetchCustomers();
  }, []);

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId);

  return (
    <div className="app-container">
      <h1 className="heading">This here is the heading</h1>
      <div className="content">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;
