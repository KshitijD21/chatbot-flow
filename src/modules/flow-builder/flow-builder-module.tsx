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
    useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { edgeTypes, initialEdges, initialNodes, nodeTypes } from "./constants/default-nodes";

import { channels } from "@/components/mainComponent/main-component-reducer";

export default function FlowBuilderModule() {
    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const { addNodes } = useReactFlow();

    const onConnect = useCallback(
        (params: Connection) => setEdges(eds => addEdge(params, eds)),
        [setEdges],
    );

    function onNodeAdd(event: any) {
        event.preventDefault();
        const data = event.dataTransfer.getData("nodeValue");

        const value = JSON.parse(data);
        const updatedValue = {
            ...value,
            position: { x: event.x, y: event.y },
        };

        addNodes(updatedValue);
    }

    function allowDrop(event: any) {
        event.preventDefault();
    }

    return (
        <Box onDrop={() => onNodeAdd(event)} onDragOver={() => allowDrop(event)} color="black" height="90vh" width="100%">
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
