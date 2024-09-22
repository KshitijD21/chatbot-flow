"use client";
import { createContext, useContext, useState } from "react";

import { ViewModeOptions } from "@/components/mainComponent/main-component-reducer";

function useApplicationStateProvider() {
    const [viewMode, setViewMode] = useState(ViewModeOptions.AvailableNodes);
    return {
        viewMode,
        setViewMode,
    };
}

type ApplicationStateProps = ReturnType<typeof useApplicationStateProvider>;

export const ApplicationStateContext = createContext<ApplicationStateProps>({} as ApplicationStateProps);

export const useApplicationState = () => useContext(ApplicationStateContext);

export default function ApplicationStateProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const applicationProvider = useApplicationStateProvider();
    return (
        <ApplicationStateContext.Provider value={applicationProvider}>
            {children}
        </ApplicationStateContext.Provider>
    );
}
