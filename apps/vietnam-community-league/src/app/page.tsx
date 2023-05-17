import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitch, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

const socialMediaLinks = [
    {
        title: "Discord",
        icon: faDiscord,
        href: "https://vcl.works/discord",
    },
    {
        title: "Twitch",
        icon: faTwitch,
        href: "https://twitch.tv/vncommunityleague",
    },
    {
        title: "YouTube",
        icon: faYoutube,
        href: "https://www.youtube.com/@vncommunityleague",
    },
    {
        title: "Facebook",
        icon: faFacebook,
        href: "https://www.facebook.com/VNCommunityLeague",
    },
];

export default function HomePage() {
    return (
        <main>
            <div className="flex flex-col justify-around items-center">
                <div className="max-w-4xl min-h-screen px-4 py-24 flex flex-col items-center justify-center text-center">
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
                    <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-y-4 text-black">
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
                                <div className="mt-2 font-extralight hover:underline">
                                    <a href="https://vcl.works/discord" target="_blank" rel="noopener noreferrer">
                                        Join our Discord server!
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="px-2 py-3 text-xl font-bold">Affiliation</div>
                            <div className="px-2 py-3 text-base">
                                <div className="mt-1 font-extralight">
                                    Hosting a Vietnamese tournament and would like to join our network?
                                </div>
                                <div className="mt-2 font-extralight hover:underline">
                                    <a href="https://vcl.works/discord" target="_blank" rel="noopener noreferrer">
                                        Contact us via our Discord server!
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="px-2 py-3 text-xl font-bold">Follow</div>
                            <div className="px-2 py-3 text-base">
                                <div className="flex justify-center mt-1">
                                    <ul className="flex gap-3">
                                        {socialMediaLinks.map((link) => {
                                            return (
                                                <li key={link.title}>
                                                    <a
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title={link.title}
                                                    >
                                                        <div className="p-1.5">
                                                            <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
                                                        </div>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
