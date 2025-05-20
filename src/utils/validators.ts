export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 6; // Example: password must be at least 6 characters long
};

export const validateForm = (email: string, password: string): boolean => {
    return validateEmail(email) && validatePassword(password);
};