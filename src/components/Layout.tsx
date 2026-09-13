import type { FC } from "hono/jsx"

type LayoutProps = {
    title: string
    currentPath: string
    children: any
}

export const Layout: FC<LayoutProps> = ({ title, currentPath, children }) => {
    const isHome = currentPath != '/'

    return (
        <html lang="fr">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/public/style.css"/>
                <title>{title}</title>
            </head>
            <body>
                <nav>
                    <a class="logo" href="/">What's the weather</a>
                    {isHome && (
                        <form action="/meteo" method="get">
                            <input
                                type="search"
                                name="city"
                                placeholder="Chercher une ville"
                            />
                        </form>
                    )}
                </nav>

                <main>{children}</main>

                <footer>
                    <p>© 2026 - What's the weather</p>
                </footer>
            </body>
        </html>
    )
}