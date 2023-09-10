import { styled } from 'styled-components';
import { fetchData } from './fetchData';

const apiFetch = fetchData('https://reqres.in/api/users');

function App() {
  const rows = apiFetch.read().data;
  return (
    <Container>
      {rows?.map((row) => {
        return (
          <ul key={row.id}>
              <li>{row.first_name} - {row.last_name}</li>
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
