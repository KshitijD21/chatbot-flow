import { type Node, useNodesData } from "@xyflow/react";

import type { Data } from "@/components/mainComponent/main-component-reducer";

export function useSelectedNode(selectedNodeId: string) {
    const node = useNodesData<Node<Data>>(selectedNodeId);
    return { selectedNode: node };
}
