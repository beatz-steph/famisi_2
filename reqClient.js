import axios from 'axios';
import {apiRoot} from './constatnts';

const client = axios.create({
  baseURL: apiRoot,
  transformResponse: [
    /**
     * Throw errors when the API returns non-success responses
     */
    data => {
      let resp;
      // // FIXME: fix this code to be readable and simple
      try {
        resp = JSON.parse(data);
      } catch {
        return data;
      }

      if (!resp) {
        throw resp;
      }

      return resp;
    },
  ],
});

client.interceptors.request.use(
  config => {
    return config;
  },
  err => Promise.reject(err),
);

export default client;
