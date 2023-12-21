import { Autocompletion } from 'types/autocompletion';
import { FuzzyCompletion } from 'types/fuzzycompletion';
import { LEIRecord } from 'types/lei-record';

const baseURL = 'https://api.gleif.org/api/v1/'
export type filter = "entity.legalName" | "fulltext" | "owns" | "ownedBy"
export type filter2 = "fulltext" | "owns" | "ownedBy"


export async function getLEIRecordByID(id: string): Promise<LEIRecord> {
  const url = `${baseURL}lei-records/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function getAutocompletions(field: filter2, q: string): Promise<Autocompletion[]> {
  const url = `${baseURL}autocompletions?field=${field}&q=${q}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getFuzzyCompletions(field: filter, q: string): Promise<FuzzyCompletion[]> {
  const url = `${baseURL}fuzzycompletions?field=${field}&q=${q}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}


export async function getLEIRecordsByISIN(isin: string): Promise<LEIRecord[]> {
  const url = `${baseURL}lei-records?filter[isin]=${isin}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getLEIRecordsByBIC(bic: string): Promise<LEIRecord[]> {
  const url = `${baseURL}lei-records?filter[bic]=${bic}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getLEIRecordsByLEI(leis: string[]): Promise<LEIRecord[]> {
  const leiQueryString = leis.map((lei) => `filter[lei]=${lei}`).join(',');
  const url = `${baseURL}lei-records?${leiQueryString}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}


export async function getLEIRegistrationStatusByLEI(lei: string): Promise<string> {
  const url = `${baseURL}lei-records/${lei}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  const registrationStatus = data.data?.attributes?.registration?.status;

  if (!registrationStatus) {
    throw new Error(`Unable to retrieve registration status for LEI: ${lei}`);
  }

  return registrationStatus;
}

export async function getLEIRecordsByStatus(status: string, pageNumber: number = 1, pageSize: number = 1): Promise<LEIRecord[]> {
  const url = `${baseURL}lei-records?filter[registration.status]=${status}&page[number]=${pageNumber}&page[size]=${pageSize}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}
export async function getLEIRecordsByCountry(countryCode: string, pageNumber: number = 1, pageSize: number = 1): Promise<LEIRecord[]> {
  const url = `${baseURL}lei-records?filter[entity.legalAddress.country]=${countryCode}&page[number]=${pageNumber}&page[size]=${pageSize}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/vnd.api+json'
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}

