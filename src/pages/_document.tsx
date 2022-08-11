import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,700;1,800&display=swap"
                    rel="stylesheet"/>
                <link data-n-head="ssr" rel="icon"
                      href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojOWVkOTQ2O30uYntmaWxsOiNmZGZkZmQ7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY0IDM2NSkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NCAtMzY1KSIvPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NCAtMzUzLjYyMSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjQgLTM0Mi4yNDEpIi8+PHJlY3QgY2xhc3M9ImIiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjY1MyAtMzY1KSIvPjxyZWN0IGNsYXNzPSJiIiB3aWR0aD0iMTAuNDA1IiBoZWlnaHQ9IjEwLjM0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE3NS42NTMgLTM1My42MjEpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjY1MyAtMzQyLjI0MSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODcuMzA2IC0zNjUpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMC40MDUiIGhlaWdodD0iMTAuMzQ1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTg3LjMwNiAtMzUzLjYyMSkiLz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwLjQwNSIgaGVpZ2h0PSIxMC4zNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODkuNTk1IC0zMzkuMzQ1KSIvPjwvZz48L3N2Zz4="/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}