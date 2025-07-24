import Header from '@/Components/Dashboard/Header';

export default function AuthenticatedLayout({ user, header }) {
    return (
        <div className="bg-gray-100">
            <Header user={user} />
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

        </div>
    );
}
