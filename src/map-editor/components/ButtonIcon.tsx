/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
import * as React from "react";
import { FiBox, FiCheckSquare, FiCopy, FiSidebar, FiSquare, FiTerminal, FiX } from "react-icons/fi";
import {
    IoIosColorPalette,
    IoIosColorWand,
    IoIosFolderOpen,
    IoIosRedo,
    IoIosUndo,
    IoMdCode,
    IoMdColorFilter,
    IoMdDownload,
    IoMdEye
} from "react-icons/io";
import { Side } from "../../types";

export const ICONS: { [key: string]: React.ComponentFactory<any, any> } = {
    eye: IoMdEye,
    [Side.Bottom as string]: FiSidebar,
    [Side.Left as string]: FiSidebar,
    [Side.Right as string]: FiSidebar,
    [Side.Top as string]: FiSidebar,
    [Side.DeTouch as string]: FiCopy,
    download: IoMdDownload,
    open: IoIosFolderOpen,
    format: IoMdCode,
    picker: IoMdColorFilter,
    commands: FiTerminal,
    checkOn: FiCheckSquare,
    checkOff: FiSquare,
    colorPalette: IoIosColorPalette,
    close: FiX,
    undo: IoIosUndo,
    redo: IoIosRedo,
    geometries: FiBox,
    magicStick: IoIosColorWand
};

export type EventCallBack = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

export interface ButtonIconProps {
    icon: React.ComponentFactory<any, any>;
    active?: boolean;
    onClick?: EventCallBack;
    title?: string;
    className?: string;
    disabled?: boolean;
}

export default class extends React.Component<ButtonIconProps> {
    render() {
        const { onClick, title, disabled, active } = this.props;
        const Icon = this.props.icon;
        let className = "button-icon";

        if (!Icon) {
            throw new Error();
        }

        if (active) {
            className += " active";
        } else if (disabled) {
            className += " disabled";
        }

        if (this.props.className) {
            className += ` ${this.props.className}`;
        }

        return (
            <div className={className} onClick={disabled ? undefined : onClick} title={title}>
                <Icon />
            </div>
        );
    }
}
