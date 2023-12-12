import React, { useState, useEffect } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';

const FertilizerCard = () => {
    const [formData, setFormData] = useState({
          name: '',
          id: '',
          price: '',
          weight: '',
    });
  
    const [organizations, setOrganizations] = useState([]);
    const [driveSchoolData, setDriveSchoolData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
        .from('ORG_ORIENTED_CAMPAIGN')
        .select('*');
        if (error) {
          console.error('Error fetching data from Supabase:', error);
        } else {
          setOrganizations(data);
        }
      } catch (error) {
        console.error('Error fetching data from Supabase:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (editIndex === -1) {
          // Add new campaign
          const { data, error } = await supabase
            .from('ORG_ORIENTED_CAMPAIGN')
            .upsert([
              {
                orgName: formData.orgName || '',
                description: formData.description || '',
                venue: formData.venue || '',
                volunteerAmount: formData.volunteerAmount || '',
                date: formData.date || '',
              },
            ]);
  
          if (error) {
            console.error('Error adding data to Supabase:', error);
          } else {
            console.log('Data added successfully:', data);
            fetchData();
          }
        } else {
          // Edit existing campaign
          const { data, error } = await supabase
            .from('ORG_ORIENTED_CAMPAIGN')
            .upsert([
              {
                org_id: organizations[editIndex].org_id,
                orgName: formData.orgName || '',
                description: formData.description || '',
                venue: formData.venue || '',
                volunteerAmount: formData.volunteerAmount || '',
                date: formData.date || '',
              },
            ]);
  
          if (error) {
            console.error('Error updating data in Supabase:', error);
          } else {
            console.log('Data updated successfully:', data);
            fetchData();
          }
          setEditIndex(-1);
        }
      } catch (error) {
        console.error('Error upserting data into Supabase:', error);
      }
  
      setFormData({
          name: '',
          id: '',
          price: '',
          weight: '',
      });
    };
  
    const handleEdit = (orgId) => {
      const index = organizations.findIndex((org) => org.org_id === orgId);
      if (index !== -1) {
        setFormData(organizations[index]);
        setEditIndex(index);
      }
    };
  
    const handleDelete = async (orgId) => {
      try {
        const { data, error } = await supabase
          .from('ORG_ORIENTED_CAMPAIGN')
          .delete()
          .eq('org_id', orgId);
  
        if (error) {
          console.error('Error deleting data from Supabase:', error);
        } else {
          console.log('Data deleted successfully:', data);
          fetchData();
        }
      } catch (error) {
        console.error('Error deleting data from Supabase:', error);
      }
    };
  
    return (
      <div>
        <h1 className="orgcatite">ADD FERTILIZER</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            name="Fertilizer"
            placeholder="Fertilizer Name"
            value={formData.ferName}
            onChange={handleChange}
          />
          
          <input
            type="text"
            name="Price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
          />
          
          <button type="submit" className="small-button">
            {editIndex === -1 ? 'Add' : 'Edit'}
          </button>
        </form>
        <div className="fertilizerCard">
      {organizations.map((fer) => (
        <React.Fragment key={fer._id}>
          <div className="organization-card">
            <div className="fertilizerCard">
              <h2>{fer.name}</h2>
              <p>{fer.weight}</p>
              <p>price: {fer.price}</p>
              <button onClick={() => handleEdit(fer.fer_id)} className="small-button">
                Edit
              </button>
              <button onClick={() => handleDelete(fer.fer_id)} className="small-button">
                Delete
              </button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
    );
  };
  export default FertilizerCard;