interface ApiResponse {
    message: string;
}

const API_URL = 'http://localhost:3000';

export const register = async (username: string, email: string, password: string, firstName: string, lastName: string): Promise<ApiResponse> => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, first_name: firstName, last_name: lastName }),
        credentials: 'include',
    });
    if (!response.ok) {
        throw new Error('Registration failed');
    }
    return await response.json();
};
