import { BASE_URL } from '../../constants'

export default function getPosts() {
  return fetch(`${BASE_URL}/posts?_limit=3`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => {
      nsole.error('Error:', error)
    })
}
