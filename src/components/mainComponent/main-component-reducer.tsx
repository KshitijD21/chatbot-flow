"use client";
import { useMemo, useReducer, useState } from "react";

export enum MainReducerTypes {
    SET_VIEW_MODE = "SET_VIEW_MODE",
    ADD_NODE = "ADD_NODE",
    REMOVE_NODE = "REMOVE_NODE",
    UPDATE_NODE = "UPDATE_NODE",
}

export enum ViewModeOptions {
    AvailableNodes = "available-nodes",
    NodeProperties = "node-properties",
}

export interface ChannelKey {
    name: string;
    icon: string;
}

export const channels: Record<string, ChannelKey> = {
    SMS: {
        name: "SMS",
        icon: "i-ic:round-sms",
    },
    WhatsApp: {
        name: "WhatsApp",
        icon: "i-ic:round-whatsapp",
    },
    Messenger: {
        name: "Messenger",
        icon: "i-mingcute:messenger-line",
    },
    Telegram: {
        name: "Telegram",
        icon: "i-ic:round-telegram",
    },
};

interface SetViewModeAction {
    type: MainReducerTypes.SET_VIEW_MODE;
    payload: ViewModeOptions;
};
interface Position {
    x: number;
    y: number;
}

export interface Data extends Record<string, any> {
    socialMedia: ChannelKey;
    message: string;
}

export interface NodeValue {
    id: string;
    position: Position;
    type: string;
    data: Data;
}

interface AddNodeAction {
    type: MainReducerTypes.ADD_NODE;
    payload: NodeValue;
};

interface UpdateNodeAction {
    type: MainReducerTypes.UPDATE_NODE;
    payload: NodeValue;
};

type Action = SetViewModeAction | AddNodeAction | UpdateNodeAction;

export const initialState = {
    viewMode: ViewModeOptions.AvailableNodes,
    nodeValue: [
        {
            id: "default_node",
            position: { x: 100, y: 200 },
            type: "mainNode",
            data: {
                socialMedia: channels.SMS,
                message: "Default message",
            },
        },
    ],
};

export function mainReducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case MainReducerTypes.SET_VIEW_MODE:
            return { ...state, viewMode: action.payload };
        // case MainReducerTypes.ADD_NODE:
        //     return { ...state, nodeValue: [...state.nodeValue, action.payload] };
        // case MainReducerTypes.UPDATE_NODE: {
        //     const updatedNodeValue = state.nodeValue.map(node =>
        //         node.id === action.payload.id ? { ...node, ...action.payload } : node,
        //     );
        //     return { ...state, nodeValue: updatedNodeValue };
        // }
        default:
            throw new Error(`Unknown action type`);
    }
}

export function useProductReducer() {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    const actions = useMemo(() => ({
        setViewMode: (viewMode: ViewModeOptions) => {
            dispatch({
                type: MainReducerTypes.SET_VIEW_MODE,
                payload: viewMode,
            });
        },
        // setNewNode: (nodeValue: { id: string; data: Data; type: string; position: Position }) => {
        //     dispatch({
        //         type: MainReducerTypes.ADD_NODE,
        //         payload: nodeValue,
        //     });
        // },
        // setUpdatedNode: (nodeValue: { id: string; data: Data; type: string; position: Position }) => {
        //     console.log("updated node value ", nodeValue);

        //     dispatch({
        //         type: MainReducerTypes.UPDATE_NODE,
        //         payload: nodeValue,
        //     });
        // },

    }), [dispatch]);

    return {
        state,
        actions,
    };
}
