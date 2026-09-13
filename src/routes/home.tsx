import { Hono } from 'hono'
import { HomePage } from "../pages/Home.tsx";

const homeRoute = new Hono();

homeRoute.get('/', (c) => {
    return c.html(<HomePage currentPath={c.req.path}/>)
})

export { homeRoute }