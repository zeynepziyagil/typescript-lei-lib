// types/fuzzycompletion.ts

export interface FuzzyCompletion {
    type: string;
    attributes: {
        value: string;
    };
    relationships: {
        leiRecords: {
            data: {
                type: string;
                id: string;
            };
            links: {
                related: string;
            };
        };
    };
}
