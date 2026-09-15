type WeatherData = {
    city: string
    temp: number
    description: string
    icon: string
    humidity: number
    windSpeed: number
    country: string
    sunrise: string
    sunset: string
    pressure: number
    seaLevel: number | null
    groundLevel: number | null
    maxtemp: number
    mintemp: number
}

export async function getWeather(cityName: string): Promise<WeatherData | null> {
    const apiKey = process.env.OPENWEATHER_API_KEY
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric&lang=fr`

    function formatSunTime(unixTimestamp: number, timezoneOffsetSeconds: number): string {
        const date = new Date((unixTimestamp + timezoneOffsetSeconds) * 1000)

        return date.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC'
        })
    }

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
            sunrise: formatSunTime(data.sys.sunrise, data.timezone),
            sunset: formatSunTime(data.sys.sunset, data.timezone),
            pressure: data.main.pressure,
            seaLevel: data.main.sea_level ?? null,
            groundLevel: data.main.grnd_level ?? null,
            maxtemp: Math.round(data.main.temp_max),
            mintemp: Math.round(data.main.temp_min),
        }
    } catch (error) {
        console.error("Erreur lors de la récupération météo:", error)
        return null
    }
}