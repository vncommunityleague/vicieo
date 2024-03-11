<script>
    import { Metadata } from "@vncommunityleague/ui";
    import { page } from "$app/stores";
</script>

<Metadata
    metadata={{
        url: $page.data.metadata.url,
        title: $page.data.metadata.title,
        description: $page.data.metadata.description,
    }}
/>

<main class="flex flex-1">
    <div class="flex flex-col max-w-7xl mx-auto px-4 sm:px-12 py-28">
        <div class="mx-auto">
            <nav>
                <ul class="flex gap-x-2">
                    <li>
                        <a href="/info/general-information">
                            <div class="text-3xl uppercase">Thông tin chung</div>
                        </a>
                    </li>
                    <li>
                        <div class="font-bold text-3xl uppercase">/</div>
                    </li>
                    <li>
                        <a href="/info/format">
                            <div class="font-bold text-3xl uppercase">Thể thức</div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="mt-4 px-4 sm:px-16 py-12 bg-black/20">
            <div class="flex flex-col gap-y-4 w-full max-w-6xl">
                <div id="general-information" class="information__container">
                    <div class="information__container__heading">
                        <a class="py-3" href="#general-information">
                            <h3 class="information__container__heading__text">Thông tin chung</h3>
                        </a>
                    </div>
                    <div class="information__container__body">
                        <ul class="information__container__body__list list-disc">
                            <li>
                                <strong>Vietnam osu! Championship 2024 (VNOC5)</strong> là giải đấu osu! standard theo thể
                                thức Head-to-Head 1v1. Score V2 và NF sẽ được áp dụng cho mọi map trong giải.
                            </li>
                            <li>
                                <strong
                                    >Giải dành riêng cho những người chơi có cờ Việt Nam trên profile và không có ngoại
                                    lệ</strong
                                >.
                            </li>
                            <li>Giải đấu không có giới hạn về rank đối với người tham gia.</li>
                            <li>
                                Quá trình <strong>Screening</strong> sẽ được thực hiện bởi osu! tournament staff để đảm bảo
                                người chơi không vi phạm các quy định hiện có của osu! và đủ điều kiện tham gia giải đấu.
                            </li>
                            <li>
                                <strong>Vòng sơ loại (Qualifiers)</strong> sẽ được áp dụng để chọn ra 32 người chơi tốt nhất
                                được tiến vào vòng thi đấu chính thức của giải.
                            </li>
                            <li>
                                Khác với những giải đấu truyền thống khác trong và ngoài nước, VNOC5 sẽ áp dụng thể thức
                                mở rộng hơn, gồm 5 lượt thi đấu trong vòng Thuỵ Sĩ (Swiss), và 4 lượt thi đấu trong vòng
                                loại trực tiếp (Knockout). Thông tin chi tiết có trong phẩn <a href="/info/format"
                                    >THỂ THỨC</a
                                >
                            </li>
                            <li>
                                Trong suốt quá trình tham gia giải, người chơi bắt buộc phải có mặt trong server
                                Discord. Rời server trong quá trình tham gia đồng nghĩa với việc người chơi chấp nhận
                                việc bị loại khỏi giải.
                            </li>
                            <li>
                                Khác với những mùa trước, người chơi vô địch mùa giải VNOC gần nhất <strong
                                    >được tham gia</strong
                                >, vì thời gian nghỉ giữa 2 mùa giải dài hơn bình thường.
                            </li>
                            <li>
                                Staff của giải bị cấm tham gia giải đấu, với ngoại lệ gồm <strong>Streamer</strong>,
                                <strong>Commentator</strong> và <strong>GFX</strong>. Người chơi bị loại có thể đăng ký
                                làm Playtester hoặc Referee.
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="prizes" class="information__container">
                    <div class="information__container__heading">
                        <a class="py-3" href="#prizes">
                            <h3 class="information__container__heading__text">Phần thưởng</h3>
                        </a>
                    </div>
                    <div class="information__container__body">
                        <ul class="information__container__body__list list-disc">
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Nhà vô địch:</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>50% tiền donate từ cộng đồng.</li>
                                            <li>Profile badge (pending).</li>
                                            <li>Profile banner.</li>
                                            <li>1x Áo VNOC5 kèm custom.</li>
                                            <li>Gói quà tặng nhà vô địch (chi tiết sẽ được công bố sau).</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Top 2:</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>30% tiền donate từ cộng đồng.</li>
                                            <li>Profile banner.</li>
                                            <li>1x Áo VNOC5 kèm custom.</li>
                                            <li>Gói quà tặng top 2 (chi tiết sẽ được công bố sau).</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Top 3:</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>20% tiền donate từ cộng đồng.</li>
                                            <li>Profile banner.</li>
                                            <li>1x Áo VNOC5 kèm custom.</li>
                                            <li>Gói quà tặng top 3 (chi tiết sẽ được công bố sau).</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="postcss">
    strong {
    }

    .information__container {
        scroll-margin-top: 80px;
    }

    .information__container__heading {
        padding-bottom: 4px;
        border-bottom-width: 2px;
    }

    .information__container__heading__text {
        font-weight: 700;
        text-transform: uppercase;

        @apply text-4xl;
    }

    .information__container__body {
        margin-top: 12px;
        margin-bottom: 12px;
        padding-left: 40px;
        padding-right: 40px;

        @apply text-base;
    }

    .information__container__body__list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style-position: outside;
    }
</style>
