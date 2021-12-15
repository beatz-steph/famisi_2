import axios from 'axios';
import reqClient from './reqClient';
import {asyncCatch} from './functions';

export const login = async (
  creds,
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    async () => {
      //comment out make api call to login
      const {data} = await reqClient.post(`/auth/signin`, creds);

      onSuccess(data);
    },
    'Error login in',
    onFailure,
  );
};

export const signup = async (
  creds,
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    async () => {
      //comment out make api call to login
      const {data} = await reqClient.post(`/auth/signup`, creds);

      onSuccess(data);
    },
    'Error creating account',
    onFailure,
  );
};
