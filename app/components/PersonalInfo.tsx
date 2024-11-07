import React from 'react';
import { BsPerson, BsCalendar2Event, BsGenderAmbiguous, BsArrowsAngleExpand, BsSpeedometer2, BsBook, BsWhatsapp, BsEnvelope } from 'react-icons/bs';

const PersonalInfo = () => {
    return (
        <div className="container mx-auto p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-white tracking-wide">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-700 rounded-2xl shadow-lg">
                {/* Card 1: Nama */}
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    <BsPerson className="text-white mr-4 text-3xl transform transition-transform duration-300 hover:scale-105" />
                    <p className="text-lg font-medium text-white"><strong>Nama :</strong> Dandi Muhamad Ramdan</p>
                </div>
                {/* Card 2: TTL */}
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    <BsCalendar2Event className="text-white mr-4 text-3xl transform transition-transform duration-300 hover:scale-105" />
                    <p className="text-lg font-medium text-white"><strong>TTL :</strong> Sumedang, 07 Januari 2004</p>
                </div>
                {/* Card 3: Gender */}
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    <BsGenderAmbiguous className="text-white mr-4 text-3xl transform transition-transform duration-300 hover:scale-105" />
                    <p className="text-lg font-medium text-white"><strong>Gender :</strong> Laki-laki</p>
                </div>
                {/* Card 4: Tinggi Badan */}
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    <BsArrowsAngleExpand className="text-white mr-4 text-3xl transform transition-transform duration-300 hover:scale-105" />
                    <p className="text-lg font-medium text-white"><strong>Tinggi Badan :</strong> 170 cm</p>
                </div>
                {/* Card 5: Berat Badan */}
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    <BsSpeedometer2 className="text-white mr-4 text-3xl transform transition-transform duration-300 hover:scale-105" />
                    <p className="text-lg font-medium text-white"><strong>Berat Badan :</strong> 55kg</p>
                </div>
                {/* Card 6: Status */}
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    <BsBook className="text-white mr-4 text-3xl transform transition-transform duration-300 hover:scale-105" />
                    <p className="text-lg font-medium text-white"><strong>Status :</strong> Mahasiswa</p>
                </div>
                {/* Card 7: WhatsApp */}
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    <BsWhatsapp className="text-green-400 mr-4 text-3xl transform transition-transform duration-300 hover:scale-105" />
                    <p className="text-lg font-medium text-white"><strong>WhatsApp :</strong> 081411096188</p>
                </div>
                {/* Card 8: Email */}
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    <BsEnvelope className="text-blue-300 mr-4 text-3xl transform transition-transform duration-300 hover:scale-105" />
                    <p className="text-lg font-medium text-white"><strong>Email :</strong> dandi41149@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
