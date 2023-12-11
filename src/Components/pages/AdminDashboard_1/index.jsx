import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';

const AdminDashboard_1 = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase.from('Fertilizer').select('Personal_id, Kg, typeF');
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
        <h1>Fertilizer Order</h1>

        <table>
          <thead>
            <tr>
              <th>Personal id</th>
              <th>Weight</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.Personal_id}>
                <td>{location.Personal_id}</td>
                <td>{location.Kg}</td>
                <td>{location.typeF}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AdminDashboard_1;

