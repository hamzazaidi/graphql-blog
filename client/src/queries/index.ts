import { gql } from '@apollo/client';
const GET_USERS = gql`
  {
    users {
      name
      id
    }
  }
`


export { GET_USERS }