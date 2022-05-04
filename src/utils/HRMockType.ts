type HRMockType = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<{
        title: string | null;
        url: string;
        author: string;
        num_comments: number | null;
        story_id: number | null;
        story_title: string | null;
        story_url: string | null;
        parent_id: number | null;
        created_at: string;
    }>;
};

export default HRMockType;
