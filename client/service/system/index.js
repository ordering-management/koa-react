import { request } from '../../utils/request';

export async function fetchMenuRequest() {
  return request('/api/system/menu', {
    method: 'GET',
  });
}

export async function fetchListConfig(key) {
  return request(`/api/system/list-config/${key}`, { method: 'GET' });
}

export async function fetchEditConfig(key) {
  return request(`/api/system/edit-config/${key}`, { method: 'GET' });
}
