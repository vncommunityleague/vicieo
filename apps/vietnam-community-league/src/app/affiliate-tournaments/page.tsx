import Image from "next/image";

const tournaments: Array<{ name: string; description: string; banner_path: string }> = [
    {
        name: "DanX's Draft Cup Series",
        description:
            "A fun and gimmicky tournaments, originally hosted by SakuyaMyAngel and DanX, this is the first draft tournament of Vietnam.",
        banner_path: "/assets/images/banners/tournaments/default.png",
    },
    {
        name: "Tâm Huyết Tournament",
        description:
            'Hosted by one of the OG osu! group in Vietnam - "Tâm Huyết", THT is on its way to become the one of the premier tournament in Vietnam, with its rotating format each years.',
        banner_path: "/assets/images/banners/tournaments/default.png",
    },
    {
        name: "Vietnam Mania Championship",
        description:
            "Focus on bring new vibes to the mania scene of Vietnam, this tournament is an equivalent to VNOC but on a different game mode.",
        banner_path: "/assets/images/banners/tournaments/default.png",
    },
];

export const metadata = {
    title: "Vietnam Community League - Affiliate Tournaments",
};

export default function AffiliateTournamentsPage() {
    return (
        <main>
            <div className="min-h-screen flex flex-col items-center">
                <div className="max-w-4xl px-4 py-24 flex flex-col justify-center items-center text-center">
                    <div className="text-6xl font-medium">Affiliate Tournaments</div>
                    <div className="w-28 mt-6 mb-8 border-b-8 border-[#e6765f]"></div>
                    <div className="text-lg">
                        These are tournaments that VCL does not organize, but provides support in administrative roles.
                    </div>
                </div>
                <div className="w-full flex flex-col flex-grow justify-start items-center bg-white">
                    <div className="max-w-6xl mt-4 text-black">
                        <ul className="flex flex-col">
                            {tournaments.map((tournament) => {
                                return (
                                    <li key={tournament.name}>
                                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-1 lg:gap-y-10 p-8">
                                            <div className="w-1/2 lg:w-1/3 flex justify-center items-center">
                                                <div className="relative w-72 sm:w-96 h-40 sm:h-56">
                                                    <Image
                                                        src={tournament.banner_path}
                                                        alt="Tournament Banner"
                                                        fill
                                                        sizes="100vw"
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <div className="pl-12 mt-2 lg:mt-8 text-center lg:text-left">
                                                <div className="text-4xl font-semibold">{tournament.name}</div>
                                                <div className="mt-3 text-base font-light">
                                                    {tournament.description}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
