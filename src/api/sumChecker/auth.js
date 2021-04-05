// const apiHost =
//   "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRhbmFhbGphbWFsOTRAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI4ODc3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIxLTA0LTA1IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2MTc2MDI4OTAsIm5iZiI6MTYxNzU5NTY5MH0.nL5zUfNPml778jO4_ogmy5VlKfn-DgYdOPeC_QMYUJc&format=json&language=en-gb";

// import credentials from '../credentials.json';

const CryptoJS = require('crypto-js');

const ApiMedicHost = 'https://sandbox-healthservice.priaid.ch';
const AuthHost = 'https://sandbox-authservice.priaid.ch';
const password = 'credentials.password';
const user_id = 'credentials.user_id;';

export const getToken = () => {
  const computedHash = CryptoJS.HmacMD5(`${AuthHost}/login`, password);
  const computedHashString = computedHash.toString(CryptoJS.enc.Base64);

  return fetch(`${AuthHost}/login`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user_id}:${computedHashString}`,
    },
  }).then(res => res.json());
};