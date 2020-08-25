export async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipartform-data',
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

export async function getData(url) {
  const response = await fetch(url, {
    method: 'GET',
  });

  return response.json();
}
export async function postFormData(url, data) {

  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });
  return await response.json();
}
