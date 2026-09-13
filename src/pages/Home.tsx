import { Layout } from  '../components/Layout.tsx'

type HomePageProps = {
    currentPath: string
}

export const HomePage = ({ currentPath }: HomePageProps) => {
    return (
        <Layout title="Accueil - What's the weather" currentPath={currentPath}>
            <h1>Explore weather anywhere.</h1>
            <p class="home-description">Instant, real-time climate data wrapped in a clean, distraction-free interface.</p>
            <form action="/meteo" method="get">
                <input
                    type="search"
                    name="city"
                    placeholder="Chercher une ville"
                />
            </form>
        </Layout>
    )
}