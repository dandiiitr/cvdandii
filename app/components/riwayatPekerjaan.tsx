import RowRiwayat from "./rowRiwayat";

export default function Riwayat() {
    return (
        <div className="container mx-auto p-8">
            {/* Kontainer utama dengan flexbox */}
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">

                {/* Kolom Riwayat Pendidikan */}
                <div className="flex-1 bg-white p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
                    <h2 className="text-3xl font-semibold text-black mb-6 text-center tracking-wide">Riwayat Pendidikan</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                            <div className="text-black text-lg text-center">
                                <RowRiwayat sekolah="SDN Paramount 2 (2010)" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                            <div className="text-black text-lg text-center">
                                <RowRiwayat sekolah="SMPN 1 Cimanggung (2016)" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                            <div className="text-black text-lg text-center">
                                <RowRiwayat sekolah="SMK Bintara Rancaekek (2019)" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                            <div className="text-black text-lg text-center">
                                <RowRiwayat sekolah="Universitas Masoem (2022)" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kolom Riwayat Pekerjaan */}
                <div className="flex-1 bg-white p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
                    <h2 className="text-3xl font-semibold text-black mb-6 text-center tracking-wide">Riwayat Pekerjaan</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                            <div className="text-black text-lg text-center">
                                <RowRiwayat sekolah="Camat Cimanggung (2025)" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                            <div className="text-black text-lg text-center">
                                <RowRiwayat sekolah="Bupati Sumedang (2030)" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                            <div className="text-black text-lg text-center">
                                <RowRiwayat sekolah="Gurbernur Jawa Barat (2035)" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                            <div className="text-black text-lg text-center">
                                <RowRiwayat sekolah="Presiden Indonesia (2040)" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
