// src/resolvers/index.js
const Todo = require('../models/Todo');

const resolvers = {
    Query: {
        getTodos: async () => await Todo.find(),
        getTodoById: async (_, { id }) => await Todo.findById(id),
    },
    Mutation: {
        createTodo: async (_, { title }) => {
            const newTodo = new Todo({
                title,
            });
            return await newTodo.save();
        },
        updateTodo: async (_, { id, completed }) => {
            const todo = await Todo.findById(id);
            todo.completed = completed;
            return await todo.save();
        },
        deleteTodo: async (_, { id }) => {
            await Todo.findByIdAndDelete(id);
            return 'Todo deleted';
        },
    },
};

module.exports = resolvers;
