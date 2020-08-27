import { makeSecureDecrypt } from './security';

export async function postAuthData(url, data) {
  const user = JSON.parse(
    makeSecureDecrypt(localStorage.getItem('user'))
  );

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

export async function postData(url, data) {
  if (data === null)
    data = new Object();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

export async function getAuthData(url) {
  const user = JSON.parse(
    makeSecureDecrypt(localStorage.getItem('user'))
  );

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });

  return response.json();
}

export async function getData(url) {
  const response = await fetch(url, {
    method: 'GET',
  });

  return response.json();
}

export async function postAuthFormData(url, data) {
  const user = JSON.parse(
    makeSecureDecrypt(localStorage.getItem('user'))
  );

  const response = await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
  return await response.json();
}
