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
        country: string
    } | null
    error: string | null
}



export const MeteoPage = ({currentPath, weather, error }: MeteoPageProps) => {
    const jours = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const nomJour = jours[now.getDay()];
    const heure = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const time = `${heure}:${minute}`;

    return (
        <Layout title="Météo - What's the weather" currentPath={currentPath}>
            {error && <p className="error">{error}</p>}
            {weather && (
            <section class="weather-result">
                <section class="meteo-header">
                    <div>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                            alt={weather.description}
                        />
                        <p class="header-temp">{weather.temp}°</p>
                        <h1>{weather.city}, {weather.country}</h1>
                    </div>
                    <div>
                        <p class="weather-hour">{time}</p>
                        <p class="weather-date">{nomJour}</p>
                    </div>
                </section>
                <section class="meteo-details">
                    <div class="details-side">
                        <div class="sun-air">
                            <h2>Sun hours & air state</h2>
                            <div class="sun-air-items">
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">wb_twilight</span>
                                    <div class="meteo-text">
                                        <h3>Sunrise</h3>
                                        <p>Data</p>
                                    </div>
                                </div>
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">wb_twilight_2</span>
                                    <div class="meteo-text">
                                        <h3>Sunset</h3>
                                        <p>Data</p>
                                    </div>
                                </div>
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">readiness_score</span>
                                    <div class="meteo-text">
                                        <h3>Pression de l'air</h3>
                                        <p>Data</p>
                                    </div>
                                </div>
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">air</span>
                                    <div class="meteo-text">
                                        <h3>Wind speed</h3>
                                        <p>{weather.windSpeed} m/s</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="details-side">
                        <div class="temps">
                            <h2>Temperature & humidity</h2>
                            <div class="temps-items">
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">thermometer_add</span>
                                    <div class="meteo-text">
                                        <h3>Temp. max</h3>
                                        <p>data</p>
                                    </div>
                                </div>
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">thermometer_minus</span>
                                    <div class="meteo-text">
                                        <h3>Temp. min</h3>
                                        <p>data</p>
                                    </div>
                                </div>
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">humidity_mid</span>
                                    <div class="meteo-text">
                                        <h3>Humidity</h3>
                                        <p>{weather.humidity}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="levels">
                            <h2>Sea and ground level</h2>
                            <div class="levels-items">
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">tsunami</span>
                                    <div class="meteo-text">
                                        <h3>Sea level</h3>
                                        <p>data</p>
                                    </div>
                                </div>
                                <div class="meteo-item">
                                    <span class="material-symbols-outlined">landscape</span>
                                    <div class="meteo-text">
                                        <h3>Ground level</h3>
                                        <p>data</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            )}
        </Layout>
    )
}