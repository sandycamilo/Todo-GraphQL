const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// start schema 
const schema = buildSchema(`
type Todo {
  name: String!
  completed: Boolean!
  date: String!
  id: ID!
}

type Query {
  getAllTodos: [Todo!]!
  getTodo(id: ID!): Todo!
  getCompletedTodos(completed: Boolean!): [Todo!]!
}

type Mutation {
  addTodo(name: String!, completed: Boolean!, date: String!): Todo!
  deleteTodo(id: ID!): Todo!
  completeTodo(id: ID!, completed: Boolean!): Todo!
}
`)

// list
const todoList = [{
  name: "hw",
  date: "July 22 2022",
  id: "1", 
  completed: false
}]

// set up resolver 
const root = {
  getAllTodos: () => {
    return todoList
  },
  addTodo: ({ name, completed, date }) => {
    const todo = { name, completed, date, id: todoList.length}
    todoList.push(todo)
    return todo
  },
  deleteTodo: ({ id }) => {
    const todoIndex = todoList.findIndex(todo => todo.id === id)
    const todo = todoList[todoIndex]
    todoList.splice(todoIndex, 1)
    return todo
  },
  completeTodo: ({ id, completed }) => {
    const todo = todoList.find(todo => todo.id === id)
    todo.completed = completed
    return todo
  },
  getCompletedTodos: ({ completed }) => {
    const completedtodos = todoList.filter(todo => todo.completed === completed)
    return completedtodos
  },
  getTodo: ({ id }) => {
    const todo = todoList.find(todo => todo.id === id)
    return todo
  }
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