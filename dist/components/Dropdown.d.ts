import { ReactNode } from 'react';
type DropdownProps = {
    children: ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    style?: React.CSSProperties;
    ariaLabelledby?: string;
    selectedLabel: string;
    id?: string;
};
export declare const Dropdown: ({ children, className, style, ariaLabelledby, open, setOpen, id, selectedLabel, }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
