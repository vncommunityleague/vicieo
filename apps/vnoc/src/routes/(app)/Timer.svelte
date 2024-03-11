<script lang="ts">
    import { readable } from "svelte/store";
    import { browser } from "$app/environment";

    const REGISTRATION_START = new Date("2024-07-06T00:00:00.000Z");
    const registrationTime = REGISTRATION_START.getTime();

    const now = readable(new Date().getTime(), (set) => {
        let animationFrame;

        const next = () => {
            set(new Date().getTime());
            animationFrame = requestAnimationFrame(next);
        };

        if (browser && window.requestAnimationFrame) {
            next();
            return () => cancelAnimationFrame(animationFrame);
        }
    });

    $: timeLeft = registrationTime - $now > 0 ? registrationTime - $now : 0;
    $: [days, hours, minutes, seconds] = calculateTime(timeLeft);

    function calculateTime(time: number) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return [days, hours, minutes, seconds];
    }

    function padValue(value: number, length = 2, char = "0") {
        const { length: currentLength } = value.toString();

        if (currentLength >= length) {
            return value.toString();
        }

        return `${char.repeat(length - currentLength)}${value}`;
    }
</script>

<div class=" mt-2.5">
    <div class="flex justify-center items-center w-72 sm:w-96 h-10 mx-auto bg-[#e36363] rounded-full font-bold text-sm">
        {padValue(days)} ngày {padValue(hours)} giờ {padValue(minutes)} phút {padValue(seconds)} giây
    </div>
</div>
