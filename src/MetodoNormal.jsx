import { styled } from 'styled-components';
import { useFetch } from './useFetch';

function App() {
  const { users, loading, handlerCancelRequest } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <Container>
      <button onClick={() => handlerCancelRequest()}>Cancel</button>
      {loading && <li>Loading...</li>}
      {users?.map((user) => {
        return (
          <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  background: red;
`;

export default App
