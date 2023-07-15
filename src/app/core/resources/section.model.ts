export interface Section {
    name: string,
    sections: Section[] | null,
    fileName: string
};