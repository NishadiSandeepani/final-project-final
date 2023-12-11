import React, { useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';
import Loan1 from './Loan1.css';



const Loan = () => {
  
  const [formData, setFormData] = useState({
    
    l_id: '',
    Personal_id: '',
    l:'',
    type:'',
  });

  const showAlert = (message) => {
    alert(message);
  };

  const gatDataIntoSupabase = async (e) => {
    e.preventDefault();

    const personalId = document.getElementById('Personal_id').value;
    const l = document.getElementById('l').value;
    const type = document.getElementById('type').value;

    
    if ( !personalId  || !l || !type) {
      showAlert('Please fill out all fields.');
      return;
    }

    const formDataToUpdateSupabase = {
      
      Personal_id: personalId,
      l: l,
      type: type,
    };

    insertDataIntoSupabase(formDataToUpdateSupabase);
    
  };
  
  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('Pesticides').insert([
        {
          Personal_id: formDataToUpdateSupabase.Personal_id,
          l: formDataToUpdateSupabase.l,
          type: formDataToUpdateSupabase.type,
        },
      ]);
  
      if (error) {
        alert('Error inserting data into Supabase: ' + error.message);
      } else {
        alert('Form submitted ' );
       
      }
    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);
    }
  };

  return (
    <div className="baclround-imagez">
      <div className="Loan">
        <div className="Loan-container">
          <form onSubmit={gatDataIntoSupabase}>
            <h1 className="form-header" data-component="header">
              Apply Pesticide
            </h1>
            
            <div className="form-group">
              <label htmlFor="Personal_id">NIC</label>
              <input
                type="text"
                className="form-control"
                id="Personal_id"
                name="Personal_id"
                placeholder="Enter your NIC number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="l">Capacity</label>
              <input
                type="l"
                className="form-control"
                id="l"
                name="l"
                placeholder="l"
              />
              </div>
              <div class="form-group">
    <label for="type">Type</label>
    <select class="form-control" id="type" name="type">
      <option value="Carbosulfan">Carbosulfan</option>
      <option value="Thiamethoxam">Thiamethoxam</option>
      <option value="Diazinon">Diazinon</option>
    </select>
  </div>
            
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    

  );
};

export default Loan;