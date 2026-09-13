import { Hono } from 'hono'
import {getWeather} from "../services/weather.ts";
import { MeteoPage } from "../pages/Meteo.tsx";

const meteoRoute = new Hono()

meteoRoute.get("/", async (c) => {
    const city= c.req.query("city")


    if (!city) {
        return c.html(<MeteoPage weather={null} error="Merci de saisir une ville" currentPath={c.req.path}/>)
    }

    const weather = await getWeather(city)

    if (!weather) {
        return c.html(<MeteoPage weather={null} error="Ville non trouvée" currentPath={c.req.path}/>)
    }

    return c.html(<MeteoPage weather={weather} error={null} currentPath={c.req.path}/>)
})

export { meteoRoute }