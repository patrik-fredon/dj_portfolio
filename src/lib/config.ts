export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const endpoints = {
  contact: `${API_BASE_URL}/api/contact`
};

export const adminPanel = {
  url: `${API_BASE_URL}/admin`
};
