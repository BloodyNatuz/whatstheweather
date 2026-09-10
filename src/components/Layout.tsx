import type { FC } from "hono/jsx"

type LayoutProps = {
    title: string
    children: any
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
    return (
        <html lang="fr">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/public/style.css" />
                <title>{title}</title>
            </head>
            <body>
                <nav>
                    <a href="/">Accueil</a>
                    <a href="/contact">Contact</a>
                </nav>

                <main>{children}</main>

                <footer>
                    <p>© 2026 - What's the weather</p>
                </footer>
            </body>
        </html>
    )
}