export interface ProfileData {
    fullName?: string;
    jobTitle?: string;
    avatarUrl?: string;
    bio?: string;
    skills?: {
        languages?: string;
        frameworks?: string;
        styling?: string;
        tools?: string;
        os?: string;
        softSkills?: string;
    };
    education?: {
        university?: string;
        degree?: string;
        languages?: string;
    };
}