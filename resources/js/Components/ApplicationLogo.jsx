import React from "react";

export default function ApplicationLogo(props) {
    return (
        <div className="flex">
            <div aria-hidden="true" className="flex space-x-1">
                <div className="h-4 w-4 rounded-full bg-gray-700 dark:bg-gray-700" />
                <div className="h-6 w-2 bg-primary" />
            </div>
            <span className="text-2xl font-bold text-gray-700 dark:text-gray-700">G Business</span>
        </div>
    );
}
