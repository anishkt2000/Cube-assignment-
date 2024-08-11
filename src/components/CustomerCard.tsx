import React from 'react';
import { Customer } from '../types';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onClick }) => (
  <div onClick={onClick} className={`customer-card ${isSelected ? 'selected' : ''}`}>
    <h4>{customer.name}</h4>
    <p>{customer.description}</p>
  </div>
);

export default CustomerCard;
