import { Tables } from '../main';
export declare const EditVersionCard: ({ version, save, titleOverride, disabled, }: {
    version: Omit<Tables<"versions">, "id" | "app_id">;
    save: (version: Omit<Tables<"versions">, "id" | "app_id">) => void;
    titleOverride?: string;
    disabled?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
