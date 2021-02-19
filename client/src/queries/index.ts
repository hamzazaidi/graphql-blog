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


export { GET_USERS }