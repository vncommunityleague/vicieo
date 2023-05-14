import Image from "next/image";

const tournaments: Array<{ name: string; description: string; banner_path: string }> = [
    {
        name: "Vietnam osu! Championship",
        description:
            "Vietnam osu! Championship is the premier 1v1 tournament of Vietnam. Featuring the best production quality of Vietnamese tournament, VNOC is proud to be the face of VCL and Vietnamese community as a whole.",
        banner_path: "/assets/images/banners/tournaments/vnoc.png",
    },
    {
        name: "osu! No Name Tournament",
        description:
            "Following what VNOC features but on a smaller scale, o!NNT is providing high-tier players in Vietnam with a competitive, yet relax and enjoying environment to compete.",
        banner_path: "/assets/images/banners/tournaments/nnt.png",
    },
];

export const metadata = {
    title: "Vietnam Community League - Member Tournaments",
};

export default function MemberTournamentsPage() {
    return (
        <main>
            <div className="flex flex-col justify-around items-center">
                <div className="max-w-4xl p-24 flex flex-col justify-center items-center text-center">
                    <div className="text-6xl font-medium">Member Tournaments</div>
                    <div className="w-28 mt-6 mb-8 border-b-8 border-[#e6765f]"></div>
                    <div className="text-lg">These are tournaments that VCL team directly organize.</div>
                </div>
                <div className="w-full flex flex-col justify-center items-center bg-white">
                    <div className="max-w-6xl text-black">
                        <ul className="flex flex-col">
                            {tournaments.map((tournament) => {
                                return (
                                    <li key={tournament.name}>
                                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-1 lg:gap-y-10 p-8">
                                            <div className="w-1/2 lg:w-1/3 flex justify-center items-center">
                                                <div className="relative w-96 h-56">
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
