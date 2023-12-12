import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';
import  './AdminDashboard.css';

const AdminDashboard = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase.from('Pesticides').select('Name, Personal_id, l, type');
      if (error) {
        console.error('Error fetching locations:', error.message);
      } else {
        setLocations(data || []);
      }
    } catch (error) {
      console.error('Error fetching locations:', error.message);
    }
  }

  const handleAccept = async (personalId) => {
    try {
      // Delete data from Pesticides table
      const { error: deleteError } = await supabase.from('Pesticides').delete().eq('Personal_id', personalId);

      if (deleteError) {
        console.error('Error deleting data:', deleteError.message);
        return;
      }

      // Get email from the Supplier table using Personal_id
      const { data: supplierData, error: supplierError } = await supabase.from('Supplier').select('email').eq('Personal_id', personalId);

      if (supplierError) {
        console.error('Error fetching supplier data:', supplierError.message);
        return;
      }

      const supplierEmail = supplierData[0]?.email;

      // Send email to the supplier
      await sendEmail(supplierEmail, 'Your order accepted', 'Thank you for your order!');

      // Optional: You can fetch the updated locations after accepting
      fetchLocations();
    } catch (error) {
      console.error('Error handling accept:', error.message);
    }
  };

  const handleDelete = async (personalId) => {
    try {
      // Delete data from Pesticides table
      const { error } = await supabase.from('Pesticides').delete().eq('Personal_id', personalId);

      if (error) {
        console.error('Error deleting data:', error.message);
        return;
      }

      // Optional: You can fetch the updated locations after deleting
      fetchLocations();
    } catch (error) {
      console.error('Error handling delete:', error.message);
    }
  };

  const sendEmail = async (to, subject, message) => {
    try {
      // Example: Assuming a server endpoint to handle email sending
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };

  return (
    <div className="background-D">
      <div className='locate'>
        <h1>Pesticide Order</h1>

        <table>
          <thead>
            <tr>
              <th>Personal id</th>
              <th>Name</th>
              <th>Capacity</th>
              <th>Type</th>
              <th>Accept</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.Personal_id}>
                <td>{location.Personal_id}</td>
                <td>{location.Name}</td>
                <td>{location.l}</td>
                <td>{location.type}</td>
                <td>
                  <button onClick={() => handleAccept(location.Personal_id)}>Accept</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(location.Personal_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AdminDashboard;

