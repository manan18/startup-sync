export type UserType = {
    id: string;
    email: string;
    username: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: {
        id: string;
        name: string;
        description: string;
    };
    created_at: string;
    updated_at: string;
    avatar: {
        id: string;
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: {
            thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: null;
                size: number;
                width: number;
                height: number;
            };
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null;
        provider: string;
        provider_metadata: null;
        created_at: string;
        updated_at: string;
    };
};
