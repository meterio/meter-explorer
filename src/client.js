const axios = require('axios').default;

const BASE_URL = 'http://test.meter.io:8669';

const getBlockNumber = () => axios
    .get(`${BASE_URL}/blocks/best`)
    .then((response) => {
      console.log(response.data);
      return Promise.resolve(response.data.number);
    })
    .catch(err => Promise.reject(err));

const getBlock = (id) => {
  let blockID = id;
  if (typeof id === 'undefined') {
    blockID = 'latest';
  }
  return axios
    .get(`${BASE_URL}/blocks/${blockID}`)
    .then(response => Promise.resolve(response.data))
    .catch(err => Promise.reject(err));
};

const getTransaction = (id) => {
  let txID = id;
  if (typeof id === 'undefined') {
    txID = '';
  }
  return axios
    .get(`${BASE_URL}/transactions/${txID}`)
    .then(response => Promise.resolve(response.data))
    .catch(err => Promise.reject(err));
};
const getTransactionReceipt = (id) => {
  let txID = id;
  if (typeof id === 'undefined') {
    txID = '';
  }
  return axios
    .get(`${BASE_URL}/transactions/${txID}/receipt`)
    .then(response => Promise.resolve(response.data))
    .catch(err => Promise.reject(err));
};

const getBalance = (id) => {
  const accountID = id;
  if (typeof id === 'undefined') {
    return Promise.reject(new Error('account id is required'));
  }
  return axios
    .get(`${BASE_URL}/accounts/${accountID}`)
    .then(response => Promise.resolve(response.data.balance))
    .catch(err => Promise.reject(err));
};
const getEnergy = (id) => {
  const accountID = id;
  if (typeof id === 'undefined') {
    return Promise.reject(new Error('account id is required'));
  }
  return axios
    .get(`${BASE_URL}/accounts/${accountID}`)
    .then(response => Promise.resolve(response.data.energy))
    .catch(err => Promise.reject(err));
};

export {
  getBlockNumber,
  getBlock,
  getTransaction,
  getTransactionReceipt,
  getBalance,
  getEnergy,
};
