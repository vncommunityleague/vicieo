<script lang="ts">
    import { DiscordLogo, FacebookLogo, OsuLogo, TwitchLogo } from "$lib/components";
</script>

<div class="w-full z-10 bg-[#050505]/50">
    <div class="w-full mx-auto">
        <div
            class="flex flex-col md:flex-row justify-between items-center relative h-[150px] md:h-[70px] px-10 md:px-24 py-4"
        >
            <div class="flex flex-col md:flex-row items-center gap-2">
                <div>
                    <div class="italic text-sm/4 text-center md:text-right">This tournament is a part of</div>
                </div>
                <div>
                    <a href="https://hoaq.uk" target="_blank" rel="noopener noreferrer">
                        <div class="relative">
                            <div class="relative h-10">
                                <img
                                    src="/assets/images/banners/vietnam_community_league.png"
                                    alt="VCL Banner"
                                    class="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <nav>
                    <ul class="flex items-center gap-x-12">
                        <li>
                            <a
                                href="https://osu.ppy.sh/community/forums/topics/1639421"
                                title="Forum post"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <OsuLogo />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://discord.gg/Y8vjd93FXp"
                                title="Discord"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <DiscordLogo />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.twitch.tv/vncommunityleague"
                                title="Twitch"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <TwitchLogo />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/VNCommunityLeague"
                                title="Facebook"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <FacebookLogo />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
