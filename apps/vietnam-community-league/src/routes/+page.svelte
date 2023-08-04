<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faFacebook, faTwitch, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
    import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

    const socialMediaLinks: Array<{
        title: string;
        icon: IconDefinition;
        href: string;
    }> = [
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
</script>

<svelte:head>
    <title>Vietnam Community League</title>
    <meta name="description" content="For osu! Vietnam community, by osu! Vietnam community" />
</svelte:head>

<main>
    <div class="flex flex-col justify-around items-center">
        <div class="max-w-4xl min-h-screen px-4 py-24 flex flex-col items-center justify-center text-center">
            <h1 class="text-6xl font-medium">Vietnam Community League</h1>
            <hr class="w-28 mt-6 mb-8 border-b-8 border-[#e6765f]" />
            <div class="text-lg">
                Vietnam Community League is the first and premier osu! esports league in Vietnam, consists of the best
                tournaments in Vietnam and accompanies by highly-skilled staff members. With constantly shifting formats
                and players, Vietnam Community League provides the best osu! tournament experience in Vietnam, making
                sure all tournaments are on the same level of quality and reach.
            </div>
        </div>
        <div class="w-full py-8 flex flex-col items-center justify-center bg-white">
            <div class="max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-y-4 text-black">
                <div class="text-center">
                    <div class="px-2 py-3 text-xl font-bold">Contact</div>
                    <div class="px-2 py-3 text-base">
                        <div class="mt-1 font-medium">Inquiries:</div>
                        <div class="mt-2 font-extralight hover:underline">
                            <a href="mailto:staff.vcl.works@gmail.com"> staff.vcl.works@gmail.com </a>
                        </div>
                    </div>
                    <div class="px-2 py-3 text-base">
                        <div class="mt-1 font-medium">Others:</div>
                        <div class="mt-2 font-extralight hover:underline">
                            <a href="https://vcl.works/discord" target="_blank" rel="noopener noreferrer">
                                Join our Discord server!
                            </a>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div class="px-2 py-3 text-xl font-bold">Affiliation</div>
                    <div class="px-2 py-3 text-base">
                        <div class="mt-1 font-extralight">
                            Hosting a Vietnamese tournament and would like to join our network?
                        </div>
                        <div class="mt-2 font-extralight hover:underline">
                            <a href="https://vcl.works/discord" target="_blank" rel="noopener noreferrer">
                                Contact us via our Discord server!
                            </a>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div class="px-2 py-3 text-xl font-bold">Follow</div>
                    <div class="px-2 py-3 text-base">
                        <div class="flex justify-center mt-1">
                            <ul class="flex gap-3">
                                {#each socialMediaLinks as link (link.title)}
                                    <li>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={link.title}
                                        >
                                            <div class="p-1.5">
                                                <FontAwesomeIcon icon={link.icon} class="h-5 w-5" />
                                            </div>
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
