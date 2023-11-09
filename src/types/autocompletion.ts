export interface Autocompletion {
    type: string;
    attributes: {
        value: string;
        highlighting: string;
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
