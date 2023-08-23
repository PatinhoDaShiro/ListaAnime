import { Anime, Container } from './Estilos.js'
import React, { useEffect, useState } from 'react';

const ListaAnimes = () => {

    const query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
      type
      coverImage{
        medium
      }
     
    }
    
    
  }
}`;
    const [pesquisa,setPesquisa] = useState("")

    const variables = {
        page: 1,
        perPage: 10,
        search:pesquisa ? pesquisa !=="" : undefined,
    };

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://graphql.anilist.co', options)
            .then(response => response.json())
            .then(resp => { setData(resp.data.Page.media) })
            .catch(error => console.log(error));
    }, []);
    console.log(data)


    return (
        <Container>
            {
                data.map((resp) => {
                    return (
                        <Anime key={resp.id}>
                            <img src={resp.coverImage.medium}/>
                            <h1>{resp.title.romaji}</h1>
                        </Anime>
                    )
                })
            }

        </Container>
    )
}

export default ListaAnimes
