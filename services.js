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
      console.log({creds});
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

export const fetchInfo = async (
  id,
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    async () => {
      //comment out make api call to login
      const {data} = await reqClient.get(`/auth/info/${id}`);

      onSuccess(data);
    },
    'Error creating account',
    onFailure,
  );
};

export const fetchFriends = async (
  info,
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    async () => {
      //comment out make api call to login

      const {data} = await reqClient.get(`/friends/${info._id}`);

      onSuccess(data);
    },
    'Error fetching friends',
    onFailure,
  );
};

export const fetcGames = async (
  id,
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    async () => {
      //comment out make api call to login
      console.log(id);
      const {data} = await reqClient.get(`/game/${id}`);

      console.log({data, id});

      onSuccess(data);
    },
    'Error fetching games',
    onFailure,
  );
};

export const addFriend = async (
  {id, friend},
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    async () => {
      //comment out make api call to login
      const {data} = await reqClient.post(`/friends/add`, {id, friend});

      onSuccess(data);
    },
    'Error adding friend',
    onFailure,
  );
};

export const startGame = async (
  info,
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    async () => {
      console.log({info});
      //comment out make api call to login
      const {data} = await reqClient.post(`/game/start`, info);

      onSuccess(data);
    },
    'Error starting game',
    onFailure,
  );
};

export const updateGame = async (
  info,
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    /**
     * "id":"61f382241ea8c91ae8f7f557",
    "player":"player2",
    "score":"6"
     */
    async () => {
      //comment out make api call to login
      const {data} = await reqClient.post(`/game/update`, info);

      onSuccess(data);
    },
    'Error updating game',
    onFailure,
  );
};

export const fetchDb = async (
  onSuccess = () => {},
  onFailure = (err, message) => {
    console.log('on Failure');
    console.log({err, message});
  },
) => {
  asyncCatch(
    async () => {
      //comment out make api call to login
      const {data} = await reqClient.get('/quiz');

      onSuccess(data);
    },
    'Error fetching quizes',
    onFailure,
  );
};
