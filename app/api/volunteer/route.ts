import { NextResponse } from 'next/server';
import { db } from '../../firebase'; // Import the db from firebase.js
import { collection, addDoc } from 'firebase/firestore';

// Handle POST requests to save volunteer data to Firestore
export async function POST(req: Request) {
  try {
    // Parse the form data from the incoming request
    const formData = await req.formData();

    // Extract individual fields from the formData
    const name = formData.get('name')?.toString(); // Convert to string
    const email = formData.get('email')?.toString(); // Convert to string
    const phone = formData.get('phone')?.toString(); // Convert to string
    const message = formData.get('message')?.toString(); // Convert to string

    // Handle file data (resume)
    const resume = formData.get('resume');
    const resumeName = resume && resume instanceof File ? resume.name : null; // Check if it's a File

    // If all required fields are provided, proceed to store the data in Firestore
    if (name && email && phone && message) {
      // Create a reference to the "volunteers" collection
      const volunteersRef = collection(db, 'volunteers');
      
      // Add the form data to Firestore
      const docRef = await addDoc(volunteersRef, {
        name,
        email,
        phone,
        message,
        resume: resumeName, // Store the resume name if available
        timestamp: new Date(), // Optional: store the timestamp of when the document was created
      });

      // Respond with a success message
      return NextResponse.json(
        { message: 'Volunteer data saved successfully!', id: docRef.id },
        { status: 200 }
      );
    } else {
      // If required fields are missing
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error saving volunteer data:', error);
    return NextResponse.json(
      { message: 'Error submitting form. Please try again later.' },
      { status: 500 }
    );
  }
}