import { gql } from '@apollo/client';
const GET_USERS = gql`
  {
    users {
        id
        name
        avatar      
    }
  }
`


export { GET_USERS }