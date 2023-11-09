export interface LEIRecord {
    type: string;
    id: string;
    attributes: {
        lei: string;
        entity: {
            legalName: {
                name: string;
                language?: string;
            };
            otherNames: string[];
            transliteratedOtherNames: string[];
            legalAddress: {
                language?: string;
                addressLines: string[];
                addressNumber?: string;
                addressNumberWithinBuilding?: string;
                mailRouting?: string;
                city: string;
                region: string;
                country: string;
                postalCode: string;
            };
            headquartersAddress: {
                language?: string;
                addressLines: string[];
                addressNumber?: string;
                addressNumberWithinBuilding?: string;
                mailRouting?: string;
                city: string;
                region: string;
                country: string;
                postalCode: string;
            };
            registeredAt: {
                id: string;
                other?: string;
            };
            registeredAs: string;
            jurisdiction: string;
            category?: string;
            legalForm: {
                id: string;
                other?: string;
            };
            associatedEntity: {
                lei?: string;
                name?: string;
            };
            status: string;
            expiration: {
                date?: string;
                reason?: string;
            };
            successorEntity: {
                lei?: string;
                name?: string;
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
                other?: string;
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
