import React from "react";
import CommunityAdmin from "../components/sidebar";
import './FirstRespondersPage.css';
import image from '../images/nd.jpg';

const emsContacts = [
  { name: 'John Doe', phone: '123-456-7890' },
  { name: 'Jane Smith', phone: '987-654-3210' },
];

const fireContacts = [
  { name: 'Alex Johnson', phone: '555-123-4567' },
  { name: 'Emily Brown', phone: '555-987-6543' },
];

const policeContacts = [
  { name: 'Mike Davis', phone: '111-222-3333' },
  { name: 'Sarah Wilson', phone: '444-555-6666' },
];

const FastResponders = () => {
  return (
    <div>
      <CommunityAdmin name="Fast responders" />

      <div className="block rounded-lg  z-1 bg-gray-50 ml-64 mb-96 p-24 m-11 dark:bg-grey-100">
        <div className="first-responders-page">
          <h1>First Responders</h1>
          <div className="responders-section">
            <h2>EMS</h2>
            <select className="contact-dropdown">
              {emsContacts.map((contact, index) => (
                <option key={index} value={contact.phone}>
                  {contact.name}
                </option>
              ))}
            </select>
          </div>
          <div className="responders-section">
            <h2>Fire Department</h2>
            <select className="contact-dropdown">
              {fireContacts.map((contact, index) => (
                <option key={index} value={contact.phone}>
                  {contact.name}
                </option>
              ))}
            </select>
          </div>
          <div className="responders-section">
            <h2>Police Officers</h2>
            <select className="contact-dropdown">
              {policeContacts.map((contact, index) => (
                <option key={index} value={contact.phone}>
                  {contact.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastResponders;