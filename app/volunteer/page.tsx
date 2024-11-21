"use client";

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  message: string;
}

export default function Volunteer() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    resume: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === 'file') {
      // Handle file input
      const file = target.files?.[0] || null;
      setFormData((prevData) => ({
        ...prevData,
        [target.name]: file
      }));
    } else {
      // Handle text inputs
      setFormData((prevData) => ({
        ...prevData,
        [target.name]: target.value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value);
      }
    });

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Thank you for volunteering!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          message: ''
        });
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Volunteer With Us</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block text-lg font-medium">Resume</label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
