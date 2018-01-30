import { request } from '../../utils/request';

export async function fetchMenuRequest() {
  return request('/api/system/menu', {
    method: 'GET',
  });
}
