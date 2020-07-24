const query = `
query{
  getUsers{
    id, login, admin
  }
}
`
const options = {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ query })
}

export const getUsers = async () => (
  await fetch('http://localhost:4000/graphql', options)
    .then(response => {
      return response.json()
    })
)

