import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="w-full p-8 rounded-t-lg" src="data:image/jpeg;base64,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ZK2Pdz5m3OXX0TyPeKD47P4zLQ1UVXBl3sJcWZhmGrS03HPRxQfB2ISb81AcWzGQyBzdC1xdmu3pqg++N41NWVL6qZw3793mc0ZbljGsDtOBs0HTmgtVH2s4jGxrXGnlewWZLLA18rRy7+l7dTdBUMVxSarmfPUSOkmk9JzuJ5AaaAeAQbdbtFNNRU9C/JuKVz3RWbZ133vc314oNzZXbSqw1krKbdZZi0yCSMPBy3tofNB62m23qcQjjjnbTtET87TFC2M3tbUjiEEtF2s4i1gBNM6UCzZ3U7DM3SwIdwv7EFMnrJHvfI97zJIS57i43eSbkk8+KDeqdoZ5KKKhe4GnhkdKwW72ZwIJLuJ4lBJbM7e1mHxOgiMUkBJcIp4xIxrjxLQdW++yDQ2n2mqcRlEtU/MWDLG1oDWRN6MaNB8UEMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//9k=" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Notes
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$10</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Buy
                    </a>
                </div>
            </div>
        </div>
    );
}