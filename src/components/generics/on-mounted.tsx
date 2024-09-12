import { type ReactNode, useEffect, useState } from "react";

type OnMountedProps = Readonly<{
    children: ReactNode;
    fallback?: ReactNode;
}>;

export default function OnMounted({ children, fallback }: OnMountedProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return fallback;
    }

    return children;
}
