import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';

const AdminDashboard_4 = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase.from('Tea_leaf_supplier_lot').select(' Personal_id, total, weight, plucked_date, email');
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
        <h1>Tea Supply lot</h1>

        <table>
          <thead>
            <tr>
              <th>Personal id</th>
              <th>Total</th>
              <th>Weight</th>
              <th>Plucked date</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.Personal_id}>
                <td>{location.Personal_id}</td>
                <td>{location.total}</td>
                <td>{location.weight}</td>
                <td>{location.plucked_date}</td>
                <td>{location.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard_4;
