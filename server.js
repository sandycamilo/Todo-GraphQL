const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// start schema 
const schema = buildSchema(`
type Todo {
	name: String!
  completed: String!
  date: String!
  id: Int!
}

type Query {
  getAllTodos(name: String, completed: String!, date: String, id: Int!): [Todo!]!
  getTodo(name: String!, completed: String!): Todo!
  getCompletedTodos(completed: String!): [Todo!]!
}

type Mutation {
  addTodo(name: String!, completed: String!, date: String!, id: Int!): Todo!
	completeTodo(completed: String!): Todo!
}
`)

// list
const todoList = [ {
  name: "run", 
  completed: "yes sir", 
  date: "May 13 2021",
  id: "22"
}]

// set up resolver 
const root = {
	getAllTodos: () => {
		return todoList
	},
  addTodo: ({ name, completed, date, id }) => {
    const todo = { name, completed, date, id }
    todoList.push(todo)
    return todo
  }
  // completedTodo: () => {
  //     return 
  // },
  // getCompletedTodos: () => {
  //   return
  // },
  // getTodo: () => {
  //   return
  // }
}

// Create an express app
const app = express()

// Define a route for GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

// Start this app
const port = 4000
app.listen(port, () => {
  console.log('Running on port:'+port)
})