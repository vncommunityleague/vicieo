export const metadata = {
    title: "Vietnam Community League - Donate",
};

export default function DonatePage() {
    return (
        <main>
            <div className="flex min-h-screen flex-col justify-around items-center">
                <div className="w-full max-w-4xl flex flex-col justify-between items-center text-center">
                    <div className="text-6xl font-medium">Donate</div>
                    <div className="w-28 mt-6 mb-8 border-b-8 border-[#e6765f]"></div>
                    <div className="text-lg">
                        Like our work and would like to support us?{" "}
                        <a
                            href="https://ko-fi.com/vncommunityleague"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Click here
                        </a>
                        !
                    </div>
                </div>
            </div>
        </main>
    );
}
