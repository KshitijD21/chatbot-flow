import { Box } from "@chakra-ui/react";
import { BaseEdge, EdgeLabelRenderer, getStraightPath, useReactFlow } from "@xyflow/react";

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }: any) {
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            <EdgeLabelRenderer>
                <Box
                    cursor="pointer"
                    style={{
                        position: "absolute",
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: "all",
                    }}
                    className="nodrag nopan size-7 rounded-full bg-dark-500 color-red-4 hover:bg-dark-300"
                    onClick={() => {
                        setEdges(es => es.filter(e => e.id !== id));
                    }}
                    _hover={{
                        color: "red.50",
                        transform: "scale(0.7)",
                        transition: "all 0.2s ease-in-out",
                    }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <Box className="i-maki:cross size-3 transition group-hover:scale-80 group-hover:text-red-50" />
                </Box>
            </EdgeLabelRenderer>
        </>
    );
}
