"use client";
import { useMemo, useReducer } from "react";

export enum MainReducerTypes {
    SET_VIEW_MODE = "SET_VIEW_MODE",
    ADD_NODE = "ADD_NODE",
    REMOVE_NODE = "REMOVE_NODE",
    UPDATE_NODE = "UPDATE_NODE",
}

export enum ViewModeOptions {
    Group = "Group",
    Grid = "Grid",
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

export interface Data {
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

type Action = SetViewModeAction | AddNodeAction;

export const initialState = {
    viewMode: ViewModeOptions.Group,
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
        case MainReducerTypes.ADD_NODE:
            return { ...state, nodeValue: [...state.nodeValue, action.payload] };
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
        setNewNode: (nodeValue: { id: string; data: Data; type: string; position: Position }) => {
            dispatch({
                type: MainReducerTypes.ADD_NODE,
                payload: nodeValue,
            });
        },
    }), [dispatch]);

    return {
        state,
        actions,
    };
}
