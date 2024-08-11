import React from 'react';
import { Customer } from '../types';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => (
  <div className="customer-list-container custom-scrollbar">
    {customers.map((customer) => (
      <div
        key={customer.id}
        onClick={() => onSelectCustomer(customer.id)}
        className={`customer-card ${customer.id === selectedCustomerId ? 'selected' : ''}`}
        style={{
          
        }}
      >
        <h4>{customer.name}</h4>
        <p>{customer.description}</p>
      </div>
    ))}
  </div>
);

export default CustomerList;
