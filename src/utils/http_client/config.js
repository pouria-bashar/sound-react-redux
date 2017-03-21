const config = {
  paths: {
    search: '/tracks',
  },
  axiosConfig: {
    baseURL: 'https://api.soundcloud.com',
    timeout: 4000,
    params: {
      client_id: 'JgzOqV010cyD0lmG9NWTYAFRpBofLwRC',
      limit: 50,
    },
  },
};
export default config;
