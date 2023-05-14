export default function HomePage() {
    return (
        <main>
            <div className="flex flex-col justify-around items-center">
                <div className="max-w-4xl min-h-screen flex flex-col items-center justify-center text-center">
                    <div className="text-6xl font-medium">Vietnam Community League</div>
                    <div className="w-28 mt-6 mb-8 border-b-8 border-[#e6765f]"></div>
                    <div className="text-lg">
                        Vietnam Community League is the first and premier osu! esports league in Vietnam, consists of
                        the best tournaments in Vietnam and accompanies by highly-skilled staff members. With constantly
                        shifting formats and players, Vietnam Community League provides the best osu! tournament
                        experience in Vietnam, making sure all tournaments are on the same level of quality and reach.
                    </div>
                </div>
                <div className="w-full py-8 flex flex-col items-center justify-center bg-white">
                    <div className="max-w-6xl grid grid-cols-3 text-black">
                        <div className="text-center">
                            <div className="px-2 py-3 text-xl font-bold">Contact</div>
                            <div className="px-2 py-3 text-base">
                                <div className="mt-1 font-medium">Inquiries:</div>
                                <div className="mt-2 font-extralight hover:underline">
                                    <a href="mailto:staff.vcl.works@gmail.com">staff.vcl.works@gmail.com</a>
                                </div>
                            </div>
                            <div className="px-2 py-3 text-base">
                                <div className="mt-1 font-medium">Others:</div>
                                <div className="mt-2 font-extralight">Join our Discord server!</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="px-2 py-3 text-xl font-bold">Affiliation</div>
                            <div className="px-2 py-3 text-base">
                                <div className="mt-1 font-extralight">
                                    Hosting a Vietnamese tournament and would like to join our network?
                                </div>
                                <div className="mt-2 font-extralight">Contact us via our Discord server!</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="px-2 py-3 text-xl font-bold">Follow</div>
                            <div className="px-2 py-3 text-base">
                                <div className="mt-1 font-extralight"> Discord | YouTube | Twitch</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
