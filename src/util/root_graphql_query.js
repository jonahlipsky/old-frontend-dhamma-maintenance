export const graphqlQuery = async (query) => (
  await fetch('http://localhost:4000/graphql', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    })
    .then(response => {
      return response.json()
    })
)
