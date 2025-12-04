import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../database.types';
export declare function initSupabase(url: string, key: string, pkce?: boolean): void;
export declare function getSupabase(): SupabaseClient<Database, "public", "public", {
    Tables: {
        approved_apps: {
            Row: {
                app_id: number;
                bundle_identifier: string;
                category: Database["public"]["Enums"]["Category"];
                created_at: string;
                description: string | null;
                entitlements: string[];
                icon_path: string | null;
                ipad_screenshots: import('../database.types').Json;
                iphone_screenshots: import('../database.types').Json;
                latest_version: number;
                name: string;
                owner: string;
                privacy: import('../database.types').Json;
                review_id: number;
                subtitle: string | null;
            };
            Insert: {
                app_id?: number;
                bundle_identifier: string;
                category?: Database["public"]["Enums"]["Category"];
                created_at: string;
                description?: string | null;
                entitlements: string[];
                icon_path?: string | null;
                ipad_screenshots?: import('../database.types').Json;
                iphone_screenshots?: import('../database.types').Json;
                latest_version: number;
                name: string;
                owner: string;
                privacy: import('../database.types').Json;
                review_id: number;
                subtitle?: string | null;
            };
            Update: {
                app_id?: number;
                bundle_identifier?: string;
                category?: Database["public"]["Enums"]["Category"];
                created_at?: string;
                description?: string | null;
                entitlements?: string[];
                icon_path?: string | null;
                ipad_screenshots?: import('../database.types').Json;
                iphone_screenshots?: import('../database.types').Json;
                latest_version?: number;
                name?: string;
                owner?: string;
                privacy?: import('../database.types').Json;
                review_id?: number;
                subtitle?: string | null;
            };
            Relationships: [{
                foreignKeyName: "approved_apps_app_id_fkey";
                columns: ["app_id"];
                isOneToOne: true;
                referencedRelation: "apps";
                referencedColumns: ["id"];
            }, {
                foreignKeyName: "approved_apps_latest_version_fkey";
                columns: ["latest_version"];
                isOneToOne: false;
                referencedRelation: "versions";
                referencedColumns: ["id"];
            }, {
                foreignKeyName: "approved_apps_review_id_fkey";
                columns: ["review_id"];
                isOneToOne: false;
                referencedRelation: "reviews";
                referencedColumns: ["id"];
            }];
        };
        apps: {
            Row: {
                bundle_identifier: string;
                category: Database["public"]["Enums"]["Category"];
                created_at: string;
                description: string | null;
                entitlements: string[];
                icon_path: string | null;
                id: number;
                ipad_screenshots: import('../database.types').Json;
                iphone_screenshots: import('../database.types').Json;
                name: string;
                owner: string;
                privacy: import('../database.types').Json;
                subtitle: string | null;
            };
            Insert: {
                bundle_identifier: string;
                category?: Database["public"]["Enums"]["Category"];
                created_at: string;
                description?: string | null;
                entitlements: string[];
                icon_path?: string | null;
                id?: number;
                ipad_screenshots?: import('../database.types').Json;
                iphone_screenshots?: import('../database.types').Json;
                name: string;
                owner: string;
                privacy: import('../database.types').Json;
                subtitle?: string | null;
            };
            Update: {
                bundle_identifier?: string;
                category?: Database["public"]["Enums"]["Category"];
                created_at?: string;
                description?: string | null;
                entitlements?: string[];
                icon_path?: string | null;
                id?: number;
                ipad_screenshots?: import('../database.types').Json;
                iphone_screenshots?: import('../database.types').Json;
                name?: string;
                owner?: string;
                privacy?: import('../database.types').Json;
                subtitle?: string | null;
            };
            Relationships: [];
        };
        profiles: {
            Row: {
                roles: Database["public"]["Enums"]["user_role"][];
                user_id: string;
            };
            Insert: {
                roles: Database["public"]["Enums"]["user_role"][];
                user_id: string;
            };
            Update: {
                roles?: Database["public"]["Enums"]["user_role"][];
                user_id?: string;
            };
            Relationships: [];
        };
        reviews: {
            Row: {
                app_id: number;
                created_at: string;
                id: number;
                message: string | null;
                reviewed_at: string | null;
                reviewer_id: string | null;
                status: Database["public"]["Enums"]["review_status"];
                version_id: number;
            };
            Insert: {
                app_id: number;
                created_at?: string;
                id?: number;
                message?: string | null;
                reviewed_at?: string | null;
                reviewer_id?: string | null;
                status?: Database["public"]["Enums"]["review_status"];
                version_id: number;
            };
            Update: {
                app_id?: number;
                created_at?: string;
                id?: number;
                message?: string | null;
                reviewed_at?: string | null;
                reviewer_id?: string | null;
                status?: Database["public"]["Enums"]["review_status"];
                version_id?: number;
            };
            Relationships: [{
                foreignKeyName: "reviews_app_id_fkey";
                columns: ["app_id"];
                isOneToOne: false;
                referencedRelation: "apps";
                referencedColumns: ["id"];
            }, {
                foreignKeyName: "reviews_version_id_fkey";
                columns: ["version_id"];
                isOneToOne: false;
                referencedRelation: "versions";
                referencedColumns: ["id"];
            }];
        };
        versions: {
            Row: {
                app_id: number;
                build_version: string | null;
                changelog: string | null;
                checksum: string | null;
                created_at: string;
                download_url: string;
                id: number;
                status: Database["public"]["Enums"]["version_status"];
                version: string;
            };
            Insert: {
                app_id: number;
                build_version?: string | null;
                changelog?: string | null;
                checksum?: string | null;
                created_at: string;
                download_url: string;
                id?: number;
                status?: Database["public"]["Enums"]["version_status"];
                version: string;
            };
            Update: {
                app_id?: number;
                build_version?: string | null;
                changelog?: string | null;
                checksum?: string | null;
                created_at?: string;
                download_url?: string;
                id?: number;
                status?: Database["public"]["Enums"]["version_status"];
                version?: string;
            };
            Relationships: [{
                foreignKeyName: "versions_app_id_fkey";
                columns: ["app_id"];
                isOneToOne: false;
                referencedRelation: "apps";
                referencedColumns: ["id"];
            }];
        };
    };
    Views: { [_ in never]: never; };
    Functions: {
        json_matches_schema: {
            Args: {
                instance: import('../database.types').Json;
                schema: import('../database.types').Json;
            };
            Returns: boolean;
        };
        jsonb_matches_schema: {
            Args: {
                instance: import('../database.types').Json;
                schema: import('../database.types').Json;
            };
            Returns: boolean;
        };
        jsonschema_is_valid: {
            Args: {
                schema: import('../database.types').Json;
            };
            Returns: boolean;
        };
        jsonschema_validation_errors: {
            Args: {
                instance: import('../database.types').Json;
                schema: import('../database.types').Json;
            };
            Returns: string[];
        };
    };
    Enums: {
        Category: "developer" | "entertainment" | "games" | "lifestyle" | "social" | "photo-video" | "utilities" | "other";
        review_status: "pending" | "accepted" | "rejected";
        user_role: "reviewer";
        version_status: "draft" | "pending" | "accepted" | "rejected";
    };
    CompositeTypes: { [_ in never]: never; };
}, {
    PostgrestVersion: "13.0.5";
}>;
