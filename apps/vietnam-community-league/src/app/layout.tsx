import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Vietnam Community League",
    description: "For osu! Vietnam community, by osu! Vietnam community",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={inter.className + " bg-black bg-top bg-no-repeat bg-cover"}
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/assets/images/bg/vietnam_community_league_dark.png')",
                }}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
