import { gql } from '@apollo/client';
const GET_USERS = gql`
  {
    users {
        id
        name
        avatar    
        email  
        address {
            city
        }
    }
  }
`

const GET_POSTS = gql`
  {
    posts {
      id
      title
      body
    }
  }
`


export { GET_USERS, GET_POSTS }