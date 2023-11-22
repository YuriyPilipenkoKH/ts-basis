export const emailAvailable = async (fieldValue: string): Promise<string | undefined> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
        const data = await response.json();
        return data.length === 0 ? undefined : 'Email already exists';
    } catch (error) {
        // Handle fetch errors here
        console.error('Error checking email availability:', error);
        throw new Error('Failed to check email availability');
    }
};