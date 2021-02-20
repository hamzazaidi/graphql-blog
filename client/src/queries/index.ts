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
      user {
        name
        avatar
      }
    }
  }
`


export { GET_USERS, GET_POSTS }