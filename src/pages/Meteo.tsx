import { Layout } from  '../components/Layout.tsx'

type MeteoPageProps = {
    currentPath: string
    weather: {
        city: string
        temp: number
        description: string
        icon: string
        humidity: number
        windSpeed: number
    } | null
    error: string | null
}

export const MeteoPage = ({currentPath, weather, error }: MeteoPageProps) => {
    return (
        <Layout title="Météo - What's the weather" currentPath={currentPath}>
            {error && <p className="error">{error}</p>}
            <section class="meteo-header">
                <div>

                </div>
            </section>
            <section class="meteo-details">

            </section>
            {weather && (
                <div className="weather-result">
                    <h1>{weather.city}</h1>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt={weather.description}
                    />
                    <p>{weather.temp}°C</p>
                    <p>{weather.description}</p>
                    <p>Humidité : {weather.humidity}%</p>
                    <p>Vent : {weather.windSpeed} m/s</p>
                </div>
            )}
        </Layout>
    )
}