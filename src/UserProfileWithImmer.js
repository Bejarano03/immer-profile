import React, { useState } from 'react';
import { useImmer } from 'use-immer';

function UserProfileWithImmer() {
  // State initialization with useImmer
  const [userProfile, setUserProfile] = useImmer({
    name: '',
    email: '',
    contactDetails: {
      phone: '',
      address: ''
    },
    preferences: {
      newsletter: false,
      notifications: true
    }
  });

  // Function to update contact details
  const updateContactDetails = (phone, address) => {
    setUserProfile(draft => {
      draft.contactDetails.phone = phone;
      draft.contactDetails.address = address;
    });
  };

  // Function to toggle newsletter subscription
  const toggleNewsletterSubscription = () => {
    setUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={userProfile.name}
          onChange={e => setUserProfile(draft => { draft.name = e.target.value; })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={userProfile.email}
          onChange={e => setUserProfile(draft => { draft.email = e.target.value; })}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={userProfile.contactDetails.phone}
          onChange={e => updateContactDetails(e.target.value, userProfile.contactDetails.address)}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={userProfile.contactDetails.address}
          onChange={e => updateContactDetails(userProfile.contactDetails.phone, e.target.value)}
        />
      </div>
      <div>
        <label>Subscribe to Newsletter:</label>
        <button onClick={toggleNewsletterSubscription}>
          {userProfile.preferences.newsletter ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
}

export default UserProfileWithImmer;
