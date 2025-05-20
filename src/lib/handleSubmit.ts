export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Submits form data to an API endpoint.
 * Returns true if successful, otherwise throws an error.
 */
export async function handleSubmitForm(data: FormData): Promise<void> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }
  } catch (error) {
    console.error('Submission error:', error);
    throw error;
  }
}
