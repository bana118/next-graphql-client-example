// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';
import { gql } from "@apollo/client";

export type User = {
  id: number;
  name: string;
};

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;
