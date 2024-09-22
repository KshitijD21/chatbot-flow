import CustomEdge from "../components/edegs/custom-edges";
import { EndNode, MainNode, StartNode } from "../components/nodes/custom-nodes";

import type { Node } from "@xyflow/react";

import { channels } from "@/components/mainComponent/main-component-reducer";

const nodeTypes = { startNode: StartNode, endNode: EndNode, mainNode: MainNode };
const edgeTypes = {
    "custom-edge": CustomEdge,
};

const initialNodes: Node[] = [
    { id: "start-node", position: { x: 0, y: 100 }, type: "startNode", data: {} },
    { id: "default-node", position: { x: 300, y: 50 }, type: "mainNode", data: { socialMedia: channels.WhatsApp, message: "Hello", id: "Hello_world" } },
    { id: "end-node", position: { x: 900, y: 100 }, type: "endNode", data: {} },
];

const initialEdges = [
    { id: "first-node", type: "custom-edge", source: "start-node", target: "default-node" },
    { id: "sec-node", type: "custom-edge", source: "default-node", target: "end-node" },
];

export {
    edgeTypes,
    initialEdges,
    initialNodes,
    nodeTypes,
};
