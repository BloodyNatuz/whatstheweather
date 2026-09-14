type WeatherData = {
    city: string
    temp: number
    description: string
    icon: string
    humidity: number
    windSpeed: number
    country: string
}

export async function getWeather(cityName: string): Promise<WeatherData | null> {
    const apiKey = process.env.OPENWEATHER_API_KEY
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric&lang=fr`

    console.log("Clé chargée:", process.env.OPENWEATHER_API_KEY)

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.error(`Erreur API Météo: ${response.status}`)
            return null
        }

        const data = await response.json()

        return {
            city: data.name,
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            country: data.sys.country,
        }
    } catch (error) {
        console.error("Erreur lors de la récupération météo:", error)
        return null
    }
}