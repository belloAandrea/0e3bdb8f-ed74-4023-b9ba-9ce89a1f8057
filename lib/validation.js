export const validateInput = (data) => {
    // Simple validation checks (could be enhanced with a library)
    if (!data.email || !data.password) {
        throw new Error('Email and Password are required');
    }
};