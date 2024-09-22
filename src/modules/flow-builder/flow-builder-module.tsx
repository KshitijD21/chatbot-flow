"use client";

import { Box } from "@chakra-ui/react";
import {
    type Connection,
    Controls,
    type Edge,
    ReactFlow,
    addEdge,
    useEdgesState,
    useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback } from "react";

import { edgeTypes, initialEdges, initialNodes, nodeTypes } from "./constants/default-nodes";

export default function FlowBuilderModule() {
    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
                edgeTypes={edgeTypes}
            >
                <Controls />
            </ReactFlow>
        </Box>
    );
}
