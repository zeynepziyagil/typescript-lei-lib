// types/lei-record.ts

export interface LEIRecord {
    type: string;
    id: string;
    attributes: {
        lei: string;
        entity: {
            legalName: {
                name: string;
                language: string | null;
            };
            otherNames: string[];
            transliteratedOtherNames: string[];
            legalAddress: {
                language: string | null;
                addressLines: string[];
                addressNumber: string | null;
                addressNumberWithinBuilding: string | null;
                mailRouting: string | null;
                city: string;
                region: string;
                country: string;
                postalCode: string;
            };
            headquartersAddress: {
                language: string | null;
                addressLines: string[];
                addressNumber: string | null;
                addressNumberWithinBuilding: string | null;
                mailRouting: string | null;
                city: string;
                region: string;
                country: string;
                postalCode: string;
            };
            registeredAt: {
                id: string;
                other: null;
            };
            registeredAs: string;
            jurisdiction: string;
            category: string | null;
            legalForm: {
                id: string;
                other: null;
            };
            associatedEntity: {
                lei: string | null;
                name: string | null;
            };
            status: string;
            expiration: {
                date: string | null;
                reason: string | null;
            };
            successorEntity: {
                lei: string | null;
                name: string | null;
            };
            otherAddresses: any[]; // Adjust type as per actual structure
        };
        registration: {
            initialRegistrationDate: string;
            lastUpdateDate: string;
            status: string;
            nextRenewalDate: string;
            managingLou: string;
            corroborationLevel: string;
            validatedAt: {
                id: string;
                other: null;
            };
            validatedAs: string;
            otherValidationAuthorities: Array<{
                validatedAt: {
                    id: string;
                };
                validatedAs: string;
            }>;
        };
        bic: string[];
    };
    relationships: {
        managingLou: {
            links: {
                related: string;
            };
        };
        leiIssuer: {
            links: {
                related: string;
            };
        };
        directParent: {
            links: {
                relationshipRecord: string;
                leiRecord: string;
            };
        };
        ultimateParent: {
            links: {
                relationshipRecord: string;
                leiRecord: string;
            };
        };
        directChildren: {
            links: {
                relationshipRecords: string;
                related: string;
            };
        };
        isins: {
            links: {
                related: string;
            };
        };
    };
    links: {
        self: string;
    };
}
