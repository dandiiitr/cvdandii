import React from 'react';

// Sample skills data
const skillsData = [
    { name: 'Public Speaking', percentage: 80 },
    { name: 'Leadership', percentage: 70 },
    { name: 'Grapich Design', percentage: 80 },
    { name: 'Badminton', percentage: 60 },
    { name: 'Sleep', percentage: 90 },
];

const Skills = () => {
    return (
        <div className="container mx-auto p-6 text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* Circular progress bar */}
                        <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-gray-800 text-gray-800 shadow-xl">
                            <svg
                                className="absolute"
                                width="120"
                                height="120"
                                viewBox="0 0 36 36"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    className="text-gray-300"
                                    strokeWidth="4"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="16"
                                    cx="18"
                                    cy="18"
                                />
                                <circle
                                    className="text-gray-800"
                                    strokeWidth="4"
                                    strokeDasharray={`${skill.percentage}, 100`}
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="16"
                                    cx="18"
                                    cy="18"
                                    style={{
                                        transform: 'rotate(-90deg)',
                                        transformOrigin: '50% 50%',
                                    }}
                                />
                            </svg>
                            <span className="font-semibold text-2xl text-gray-800 z-10">{skill.percentage}%</span>
                        </div>
                        {/* Skill name */}
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
