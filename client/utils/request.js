import isomorphicFetch from 'isomorphic-fetch';
import { message } from 'antd';

class FetchTimeOutError extends Error {
}
;

const CORS_SIMPLE_METHODS = ['GET', 'HEAD'];

export const request = (url, options = {}) => {
  const finalOptions = { ...options, ...getDefaultFetchOpts(options, '1') };

  return new Promise((resolve, reject) => {
    const onTimeout = () => reject(new FetchTimeOutError(`调用 ${url} 时间太长!`));
    const timeout = setTimeout(onTimeout, 200000);
    isomorphicFetch(url, finalOptions)
      .then(checkResponseStatus)
      .then(parseResponse)
      .then((response) => {
        clearTimeout(timeout);
        if (response.status === '0') {
          message.error(response.msg);
        }
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timeout);
        console.log(error);
        resolve({ status: 0 });
      })
  })
}

function getDefaultFetchOpts(options, token) {
  return CORS_SIMPLE_METHODS.indexOf(options.method.toUpperCase()) >= 0 ? {} :
    {
      headers: {
        ...options.headers,
        Accept: 'application/json; charset=utf-8',
      }
    }
}

function checkResponseStatus(response) {
  if (response.ok) {
    return response;
  } else {
    message.error('操作异常')
  }
  throw response;
}

function parseResponse(rawResponse) {
  return rawResponse.text()
    .then((response) => {
      try {
        return JSON.parse(response);
      } catch (e) {
        return response;
      }
    });
}
