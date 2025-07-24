// resources/js/Components/Header.jsx
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';

export default function Header({ user }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between rounded-b-lg shadow-md">
            <h1 className="text-xl font-semibold">Finance Dashboard</h1>

            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-blue-500 text-white placeholder-blue-200 px-4 py-2 rounded-lg focus:outline-none focus:bg-blue-400 transition-colors duration-200"
                />
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-colors duration-200">
                    <Bell className="text-white" />
                </div>

                {/* Dropdown User */}
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none transition ease-in-out duration-150"
                            >
                                {user?.name}
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center ml-2">
                                    <img src="/assets/images/default.png" alt="" className="rounded-full w-8 h-8" />
                                </div>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content align="right" width="48">
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link method="post" href={route('logout')} as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
}
