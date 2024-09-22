import { PANEL_COMPONENT } from "../constants/panel";

import type { ViewModeOptions } from "@/components/mainComponent/main-component-reducer";

interface SideBarButtonItemProps {
    active: ViewModeOptions;
}
export default function SwitchSideBar({ active }: SideBarButtonItemProps) {
    const PanelComponent = PANEL_COMPONENT[active];

    return PanelComponent ? <PanelComponent /> : null;
}
