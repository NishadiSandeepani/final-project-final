import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';

const AdminDashboard_2 = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase.from('Monetary_loan').select('Personal_id,amount');
      if (error) {
        console.error('Error fetching locations:', error.message);
      } else {
        setLocations(data || []);
      }
    } catch (error) {
      console.error('Error fetching locations:', error.message);
    }
  }

  return (
    <div className="background-D">
      <div className='locate'>
        <h1>Money Order</h1>

        <table>
          <thead>
            <tr>
              <th>Personal id</th>
              <th>Amount</th>
             
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.Personal_id}>
                <td>{location.Personal_id}</td>
                <td>{location.amount}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AdminDashboard_2;

