import { styled } from "styled-components";
import { FetchDataOne } from "./FetchDataOne";

const apiFetch = FetchDataOne('https://reqres.in/api/users');

export default function App () {
    const rows = apiFetch.read().data;
    console.log(rows);
    
    return (
        <Container>
            {rows?.map((row) => {
                return (
                    <ul key={row.id}>
                        <li>{row.first_name} - {row.last_name}</li>
                        <img src={row.avatar} />
                    </ul>
                )
            })}
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    overflow: auto;

    ul {
        padding: .5rem 2rem;
        display: flex;
        width: 40%;
        background: gray;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        border-bottom: .1rem solid #202020;
        transition: background .6s ease-in;
        cursor: pointer;
        
        &:last-child {
            border-bottom: 0;
        }

        &:hover{
            background: #202020;
            border-left: .2rem solid white; 
        }

        img {
            width: 5.39rem;
            border-radius: 50%;
        }
    }
`;