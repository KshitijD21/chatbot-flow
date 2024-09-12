"use client";
import { Box } from "@chakra-ui/react";
import {
    Background,
    type Connection,
    Controls,
    type Edge,
    MiniMap,
    type Node,
    ReactFlow,
    addEdge,
    useEdgesState,
    useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useEffect } from "react";

import { EndNode, MainNode, StartNode } from "../flow-component/flow";

import type { initialState } from "./main-component-reducer";

const nodeTypes = { startNode: StartNode, endNode: EndNode, mainNode: MainNode };

// const initialNodes: Node[] = [
//     { id: "1", position: { x: 100, y: 200 }, type: "startNode", data: { label: "Kshitij" } },
//     { id: "2", position: { x: 0, y: 100 }, type: "mainNode", data: { label: "forntend", message: "Hello world" } },
//     { id: "3", position: { x: 300, y: 200 }, type: "endNode", data: { label: "backend" } },
// ];

const initialEdges: Edge[] = [];

interface WorkSpaceProps {
    state: typeof initialState;
    actions?: any;
}

export default function Workspace({ state }: WorkSpaceProps) {
    const [nodes, setNode, onNodesChange] = useNodesState(state.nodeValue);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    useEffect(() => {
        setNode (state.nodeValue);
    }, [state.nodeValue]);

    const onConnect = useCallback(
        (params: Connection) => setEdges(eds => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <Box paddingBottom="50px" color="black" height="100vh" width="100%">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
                <Controls />
            </ReactFlow>
        </Box>
    );
}
