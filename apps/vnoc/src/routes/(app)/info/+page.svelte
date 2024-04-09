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
                            <div class="font-bold text-3xl uppercase">Thông tin chung</div>
                        </a>
                    </li>
                    <!--                    <li>-->
                    <!--                        <div class="font-bold text-3xl uppercase">/</div>-->
                    <!--                    </li>-->
                    <!--                    <li>-->
                    <!--                        <a href="/info/format">-->
                    <!--                            <div class="text-3xl uppercase">-->
                    <!--                                Thể thức-->
                    <!--                            </div>-->
                    <!--                        </a>-->
                    <!--                    </li>-->
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
                                loại trực tiếp (Knockout). Thông tin chi tiết có trong phẩn <span class="font-bold"
                                    >THỂ THỨC</span
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
                                            <li>1x Keypad Wooting UwU.</li>
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
                <div id="rules" class="information__container">
                    <div class="information__container__heading">
                        <a class="py-3" href="#rules">
                            <h3 class="information__container__heading__text">Rules</h3>
                        </a>
                    </div>
                    <div class="information__container__body">
                        <ul class="information__container__body__list list-disc">
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Vòng loại (Qualifiers)</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>
                                                Người chơi cần chọn tham gia 1 lobby trong danh sách thời gian đã định
                                                bởi BTC, hoặc có thể yêu cầu lobby với thời gian riêng trong thời hạn
                                                cho phép.
                                            </li>
                                            <li>10 phút trước giờ bắt đầu, trọng tài sẽ gửi lời mời tới người chơi.</li>
                                            <li>
                                                Mappool Qualifiers sẽ được chơi 1 lần duy nhất, theo đúng thứ tự đã được
                                                công bố.
                                            </li>
                                            <li>Người chơi được yêu cầu hoàn thành toàn bộ các map có trong pool.</li>
                                            <li>
                                                Vòng loại sẽ sử dụng cách tính xếp hạng <strong>z-sum</strong> để lấy top
                                                32 người chơi tốt nhất.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Các vòng sau</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>
                                                <strong
                                                    >Giải sẽ không có warmup trước trận đấu, người chơi sẽ tự warmup
                                                    trước khi vào lobby</strong
                                                >.
                                            </li>
                                            <li>10 phút trước giờ bắt đầu, trọng tài sẽ gửi lời mời tới người chơi.</li>
                                            <li>
                                                <strong
                                                    >Tương tự VNOC4, giải đấu sẽ có lượt Protect - bảo vệ map khỏi việc
                                                    bị cấm</strong
                                                >.
                                            </li>
                                            <li>
                                                Trước khi bắt đầu lượt ban pick, người chơi cần dùng lệnh !roll để xác
                                                định thứ tự. Bên thắng roll có quyền chọn thứ tự pick hoặc thứ tự ban,
                                                bên thua có quyền chọn thứ tự còn lại. Bên ban trước có quyền protect
                                                trước. Lượt protect sẽ tiến hành trước lượt ban pick.
                                                <div class="ml-3 mt-2 text-xs">
                                                    <strong><u>VD:</u></strong> T1 roll 99, T2 roll 100. T2 có quyền chọn
                                                    1 trong các thứ tự sau: 1st pick / 1st ban / 2nd pick / 2nd ban. Nếu
                                                    T2 chọn 2nd pick, T1 có quyền chọn 1st ban hoặc 2nd ban.
                                                </div>
                                            </li>
                                            <li>
                                                Mỗi người chơi có 1 lượt ban (Swiss) hoặc 2 lượt ban (Knockout). Với 2
                                                lượt ban, người chơi <strong
                                                    >được quyền ban map trong cùng mod pool</strong
                                                >.
                                            </li>
                                            <li>
                                                <strong
                                                    >Lượt ban thứ 2 sẽ được triển khai sau khi chơi 4 map (2 pick/người
                                                    chơi)</strong
                                                >.
                                            </li>
                                            <li>
                                                Với mọi lượt ban/pick cũng như chờ sẵn sàng, người chơi có tối đa 90
                                                giây để sẵn sàng. Trong lượt ban/pick, nếu vượt quá timer trên thì trọng
                                                tài sẽ dùng lệnh roll để xác định map sẽ ban/pick.
                                                <div class="ml-3 mt-2 text-xs">
                                                    <ul class="information__container__body__list list-disc">
                                                        <li>Đối với lần vi phạm timer đầu tiên: Cảnh cáo.</li>
                                                        <li>
                                                            Từ lần vi phạm thứ 2: Referee sẽ dùng lệnh !roll &#x003C;số
                                                            map còn lại&#x003E; dể chọn ra map tiếp theo được ban/pick.
                                                            Thứ tự ban pick sau đó không thay đổi.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                Người chơi có toàn quyền chọn map có trong pool theo bất cứ trình tự nào
                                                (trừ map đã bị ban hoặc Tiebreaker).
                                            </li>
                                            <li>
                                                Mỗi người chơi có quyền yêu cầu 1 lượt abort mỗi trận (riêng GF là 2)
                                                nếu gặp vấn đề bất khả kháng trong 15 giây đầu hoặc ¼ đầu tiên (tuỳ vào
                                                khoảng thời gian nào dài hơn) trong map.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Tiebreaker</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>
                                                Khi trận đấu tiến tới tỉ số hoà sau map pick cuối cùng của cả 2 người
                                                chơi, map Tiebreaker sẽ được chơi.
                                            </li>
                                            <li>
                                                Trong map TB, người chơi có quyền pick một hoặc nhiều hơn trong tổ hợp
                                                mod cho phép: HD, HR, EZ, FL (EZ có hệ số điểm x1.8).
                                            </li>
                                            <li>Người chơi thắng trong lượt TB sẽ thắng cả trận đấu.</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Xếp lịch</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>
                                                Mọi vòng sẽ có lịch thi đấu do BTC đưa ra. Nếu người chơi không thể tham
                                                gia theo giờ đã định trước, có quyền được yêu cầu thay đổi lịch.
                                            </li>
                                            <li>
                                                Giới hạn của lịch trận đấu từ thứ 5 của tuần tương ứng tới thứ 2 tuần
                                                tiếp theo.
                                            </li>
                                            <li>
                                                Nếu người chơi gặp bất cứ vấn đề nào trong việc yêu cầu thời gian mới
                                                với đối thủ, cần báo ngay cho BTC trong thời gian sớm nhất để được hỗ
                                                trợ.
                                            </li>
                                            <li>
                                                Yêu cầu đổi lịch phải được thông báo 2 tiếng trước giờ bắt đầu, ngoài
                                                trường hợp bất khả kháng.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="disconnect" class="information__container">
                    <div class="information__container__heading">
                        <a class="py-3" href="#disconnect">
                            <h3 class="information__container__heading__text">Ngắt kết nối</h3>
                        </a>
                    </div>
                    <div class="information__container__body">
                        <ul class="information__container__body__list list-disc">
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Vòng loại</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>Ngắt kết nối trước ¼: Chơi lại map sau khi hoàn thành mappool.</li>
                                            <li>Sau ¼: tính điểm như bình thường.</li>
                                            <li>
                                                Ngắt kết nối và không có phản hồi với các map sau: Áp dụng xử phạt vắng
                                                mặt.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Các vòng sau</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>Ngắt kết nối trước 30s: Chơi lại map (1 lần/map và 2 lần/trận).</li>
                                            <li>Ngắt kết nối sau 30s: Tính điểm bình thường.</li>
                                            <li>
                                                Ngắt kết nối và không có phản hồi các map sau: Xử thua, trừ trường hợp
                                                đặc biệt.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="abandon" class="information__container">
                    <div class="information__container__heading">
                        <a class="py-3" href="#abandon">
                            <h3 class="information__container__heading__text">Xử phạt vắng mặt</h3>
                        </a>
                    </div>
                    <div class="information__container__body">
                        <ul class="information__container__body__list list-disc">
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Vòng loại</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>
                                                Người chơi có quyền thay đổi sang lobby khác trước khi hết thời gian
                                                Qualifiers.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="font-bold text-lg">Các vòng sau</div>
                                    <div class="mt-2 pl-3">
                                        <ul class="information__container__body__list list-[circle]">
                                            <li>
                                                Hết 5p đầu: người chơi mất quyền ban map. Thay vào đó, trọng tài sẽ dùng
                                                lệnh roll để xác định map ban.
                                            </li>
                                            <li>10p sau thời gian bắt đầu: Xử thua người chơi vắng mặt.</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="mt-2">
                            <p class="italic">
                                Trong trường hợp cả 2 người chơi đều vắng mặt, người chơi có xếp hạng vòng loại cao hơn
                                được đi tiếp (win by default).
                            </p>
                        </div>
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
