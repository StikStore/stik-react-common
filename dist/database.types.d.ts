export type Json = string | number | boolean | null | {
    [key: string]: Json | undefined;
} | Json[];
export type Database = {
    __InternalSupabase: {
        PostgrestVersion: "13.0.5";
    };
    public: {
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
                    ipad_screenshots: Json;
                    iphone_screenshots: Json;
                    latest_version: number;
                    name: string;
                    owner: string;
                    privacy: Json;
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
                    ipad_screenshots?: Json;
                    iphone_screenshots?: Json;
                    latest_version: number;
                    name: string;
                    owner: string;
                    privacy: Json;
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
                    ipad_screenshots?: Json;
                    iphone_screenshots?: Json;
                    latest_version?: number;
                    name?: string;
                    owner?: string;
                    privacy?: Json;
                    review_id?: number;
                    subtitle?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "approved_apps_app_id_fkey";
                        columns: ["app_id"];
                        isOneToOne: true;
                        referencedRelation: "apps";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "approved_apps_latest_version_fkey";
                        columns: ["latest_version"];
                        isOneToOne: false;
                        referencedRelation: "versions";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "approved_apps_review_id_fkey";
                        columns: ["review_id"];
                        isOneToOne: false;
                        referencedRelation: "reviews";
                        referencedColumns: ["id"];
                    }
                ];
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
                    ipad_screenshots: Json;
                    iphone_screenshots: Json;
                    name: string;
                    owner: string;
                    privacy: Json;
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
                    ipad_screenshots?: Json;
                    iphone_screenshots?: Json;
                    name: string;
                    owner: string;
                    privacy: Json;
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
                    ipad_screenshots?: Json;
                    iphone_screenshots?: Json;
                    name?: string;
                    owner?: string;
                    privacy?: Json;
                    subtitle?: string | null;
                };
                Relationships: [];
            };
            profiles: {
                Row: {
                    roles: Database["public"]["Enums"]["user_role"][] | null;
                    user_id: string;
                };
                Insert: {
                    roles?: Database["public"]["Enums"]["user_role"][] | null;
                    user_id: string;
                };
                Update: {
                    roles?: Database["public"]["Enums"]["user_role"][] | null;
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
                    reviewer_id: string;
                    status: Database["public"]["Enums"]["review_status"];
                    version_id: number;
                };
                Insert: {
                    app_id: number;
                    created_at?: string;
                    id?: number;
                    message?: string | null;
                    reviewed_at?: string | null;
                    reviewer_id: string;
                    status?: Database["public"]["Enums"]["review_status"];
                    version_id: number;
                };
                Update: {
                    app_id?: number;
                    created_at?: string;
                    id?: number;
                    message?: string | null;
                    reviewed_at?: string | null;
                    reviewer_id?: string;
                    status?: Database["public"]["Enums"]["review_status"];
                    version_id?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "reviews_app_id_fkey";
                        columns: ["app_id"];
                        isOneToOne: false;
                        referencedRelation: "apps";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "reviews_version_id_fkey";
                        columns: ["version_id"];
                        isOneToOne: false;
                        referencedRelation: "versions";
                        referencedColumns: ["id"];
                    }
                ];
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
                Relationships: [
                    {
                        foreignKeyName: "versions_app_id_fkey";
                        columns: ["app_id"];
                        isOneToOne: false;
                        referencedRelation: "apps";
                        referencedColumns: ["id"];
                    }
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            json_matches_schema: {
                Args: {
                    instance: Json;
                    schema: Json;
                };
                Returns: boolean;
            };
            jsonb_matches_schema: {
                Args: {
                    instance: Json;
                    schema: Json;
                };
                Returns: boolean;
            };
            jsonschema_is_valid: {
                Args: {
                    schema: Json;
                };
                Returns: boolean;
            };
            jsonschema_validation_errors: {
                Args: {
                    instance: Json;
                    schema: Json;
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
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};
type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];
export type Tables<DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]) | {
    schema: keyof DatabaseWithoutInternals;
}, TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"]) : never = never> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
    Row: infer R;
} ? R : never : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]) ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
    Row: infer R;
} ? R : never : never;
export type TablesInsert<DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | {
    schema: keyof DatabaseWithoutInternals;
}, TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] : never = never> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I;
} ? I : never : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Insert: infer I;
} ? I : never : never;
export type TablesUpdate<DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | {
    schema: keyof DatabaseWithoutInternals;
}, TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] : never = never> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U;
} ? U : never : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Update: infer U;
} ? U : never : never;
export type Enums<DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"] | {
    schema: keyof DatabaseWithoutInternals;
}, EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"] : never = never> = DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName] : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"] ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions] : never;
export type CompositeTypes<PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"] | {
    schema: keyof DatabaseWithoutInternals;
}, CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"] : never = never> = PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
} ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName] : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"] ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions] : never;
export declare const Constants: {
    readonly public: {
        readonly Enums: {
            readonly Category: readonly ["developer", "entertainment", "games", "lifestyle", "social", "photo-video", "utilities", "other"];
            readonly review_status: readonly ["pending", "accepted", "rejected"];
            readonly user_role: readonly ["reviewer"];
            readonly version_status: readonly ["draft", "pending", "accepted", "rejected"];
        };
    };
};
export {};
