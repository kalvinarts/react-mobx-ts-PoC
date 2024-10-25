# React + Mobx + TypeScript

Simple Todos App PoC

One Store to rule them all, One Store to find them, One Store to bring them all,
and in the darkness bind them

### Why?

The goal of this simple PoC is to show how we can separate the business logic
from the components using Mobx:

- The app is wrapped in a provider with the store as context and Mobx decides
  what needs to be rerendered
- All the components are stateless as the store keeps track of everything
- Actions triggered from a component can cause updates in other components that
  use the same store without them knowing about each other
- We can change values deep in the store tree and only the components using the
  value will trigger render

### Installing dependencies

`deno install`

or

`bun install`

or

`npm install`

### Running the app

`deno task dev`

or

`bun run dev`

or

`npm run dev`
