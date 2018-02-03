import { request } from '../utils/request';

export async function get(url) {
  return request(url, {
    method: 'GET',
  });
}

export async function post({ url, params }) {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(params)
  })
}

export async function put({ url, params }) {
  return request(url, {
    method: 'PUT',
    body: JSON.stringify(params)
  })
}
