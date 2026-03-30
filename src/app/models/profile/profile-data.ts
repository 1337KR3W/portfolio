export interface ProfileData {
    fullName?: string;
    jobTitle?: string;
    avatarUrl?: string;
    bio?: string;
    skills?: {
        languages?: string;
        frameworks?: string;
        softSkills?: string;
        tools?: string;
    };
    education?: {
        university?: string;
        degree?: string;
        languages?: string;
    };
}