import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-row gap-8 items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div className='w-full max-w-md'>
                <img src="img/Library.png" alt="Ini Logo" />
            </div>

            <div className="mt-6 w-full overflow-hidden bg-[#6E987C] px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
