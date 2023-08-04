<script lang="ts">
    const staffDb = [
        {
            user_id: "7696512",
            username: "Hoaq",
            country_code: "VN",
            role: ["Founder", "Host"],
        },
        {
            user_id: "10848857",
            username: "Vespulaz",
            country_code: "VN",
            role: ["Founder", "Host"],
        },
        {
            user_id: "8266808",
            username: "Try-Z",
            country_code: "VN",
            role: ["Founder", "Developer"],
        },
        {
            user_id: "8500334",
            username: "Mune",
            country_code: "VN",
            role: ["Developer", "Storyboarder"],
        },
        {
            user_id: "13193514",
            username: "Akane Butterfly",
            country_code: "VN",
            role: ["Developer"],
        },
        {
            user_id: "16212851",
            username: "JustMango",
            country_code: "VN",
            role: ["Developer"],
        },
        {
            user_id: "6489819",
            username: "HieuBipMC",
            country_code: "VN",
            role: ["Developer", "Moderator"],
        },
        {
            user_id: "14585583",
            username: "ryliethepooh",
            country_code: "VN",
            role: ["Developer"],
        },
        {
            user_id: "11387006",
            username: "NamSPro",
            country_code: "VN",
            role: ["Spreadsheeter"],
        },
        {
            user_id: "9676089",
            username: "rock-on",
            country_code: "VN",
            role: ["Spreadsheeter"],
        },
        {
            user_id: "12561202",
            username: "TKieen",
            country_code: "VN",
            role: ["GFX"],
        },
        {
            user_id: "17484744",
            username: "lxis",
            country_code: "VN",
            role: ["GFX"],
        },
    ];

    const staff: Array<Array<string>> = [
        ["7696512", "10848857", "8266808"],
        ["8500334", "13193514", "16212851", "6489819", "14585583"],
        ["11387006", "9676089", "12561202", "17484744"],
    ];

    const getGroupMembers = (ids: Array<string>) => {
        return staffDb.filter((staff) => ids.includes(staff.user_id));
    };
</script>

<svelte:head>
    <title>Staff | Vietnam Community League</title>
    <meta name="description" content="Those who run the show and dedicated their time to keep VCL being relevant." />
</svelte:head>

<main>
    <div class="flex flex-col justify-around items-center">
        <div class="max-w-4xl px-4 py-24 flex flex-col justify-center items-center text-center">
            <h1 class="text-6xl font-medium">Staff</h1>
            <div class="w-28 mt-6 mb-8 border-b-8 border-[#e6765f]" />
            <div class="text-lg">Those who run the show and dedicated their time to keep VCL being relevant.</div>
        </div>
        <div class="w-full flex flex-col justify-center items-center bg-white">
            <div class="max-w-7xl flex flex-col text-black">
                {#each staff as staffIds}
                    <ul class="py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {#each getGroupMembers(staffIds) as member}
                            <li>
                                <div class="p-4">
                                    <a
                                        href={`https://osu.ppy.sh/users/${member.user_id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div class="flex justify-center items-center">
                                            <div class="relative w-32 h-32">
                                                <img
                                                    src={`https://a.ppy.sh/${member.user_id}`}
                                                    alt={`${member.username}'s Avatar`}
                                                    sizes="100vw"
                                                    class="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div class="mt-2 text-center">
                                            <div class="text-lg font-semibold">
                                                {member.username}
                                            </div>
                                            <div class="text-base font-light">
                                                {member.role.join(" / ")}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        {/each}
                    </ul>
                {/each}
            </div>
        </div>
    </div>
</main>
