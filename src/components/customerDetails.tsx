import React from 'react';
import { Customer } from '../types';
import { useFetchPhotos } from '../hooks/useFetchPhotos';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const photos = useFetchPhotos(customer.id);

  return (
    <div className="customer-details-container custom-scrollbar">
      <h2>{customer.name} details here</h2>
      <p>{customer.description}</p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-cell">
            <img src={photo.url} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
