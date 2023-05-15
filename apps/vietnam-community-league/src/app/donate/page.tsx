export const metadata = {
    title: "Vietnam Community League - Donate",
};

export default function DonatePage() {
    return (
        <main>
            <div className="flex min-h-screen flex-col justify-around items-center">
                <div className="w-full max-w-4xl px-4 py-24 flex flex-col justify-between items-center text-center">
                    <div className="text-6xl font-medium">Donate</div>
                    <div className="w-28 mt-6 mb-8 border-b-8 border-[#e6765f]"></div>
                    <div className="w-full max-w-2xl">
                        <div className="text-lg">Like our work and would like to support us?</div>
                        <div className="mt-3">
                            <iframe
                                id="kofiframe"
                                src="https://ko-fi.com/vncommunityleague/?hidefeed=true&widget=true&embed=true&preview=true"
                                height="630"
                                title="vncommunityleague"
                                className="w-full p-1 border-0 bg-[#f9f9f9]"
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
