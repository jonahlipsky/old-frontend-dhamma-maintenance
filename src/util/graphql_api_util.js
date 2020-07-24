import { graphqlQuery } from './root_graphql_query';

export const getUsers = async () => {
  const query = `
    query{
      getUsers{
        id, login, admin
      }
    }
  `
  const response = await graphqlQuery(query)
  return response
}
