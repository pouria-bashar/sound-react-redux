const config = {
  paths: {
    search: '/tracks',
  },
  axiosConfig: {
    baseURL: 'https://api.soundcloud.com',
    timeout: 4000,
    params: {
      client_id: 'e582b63d83a5fb2997d1dbf2f62705da',
      limit: 50,
    },
  },
};
export default config;
