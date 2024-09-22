"use client";
import AvailableNodePanel from "../panels/available-nodes/available-nodes-panel";
import NodePropertiesPanel from "../panels/node-properties/node-properties-panel";

import { ViewModeOptions } from "@/components/mainComponent/main-component-reducer";

export const PANEL_COMPONENT = {
    [ViewModeOptions.AvailableNodes]: AvailableNodePanel,
    [ViewModeOptions.NodeProperties]: NodePropertiesPanel,
    none: () => null,
};
