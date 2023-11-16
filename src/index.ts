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

getLEIRecordByID("789000Q21SW842S9IJ58")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getLEIRecordByID("984500QBB1BJ5699DD57")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getLEIRecordByID("9845005E66F5IDBA6D19")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getLEIRecordByID("335800CA5ND5YIFIQF52")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getLEIRecordByID("98450012LF039M440411")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getLEIRecordByID("335800XU6XFLK4HN3T51")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))

getAutocompletions("fulltext", "Global")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getAutocompletions("fulltext", "Local")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getAutocompletions("owns", "facebook")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getAutocompletions("owns", "instagram")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getAutocompletions("ownedBy", "facebook")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getAutocompletions("ownedBy", "mark zuckerberg")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))


getFuzzyCompletions("entity.legalName", "factbook")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getFuzzyCompletions("entity.legalName", "instaram")
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.error(error))
getFuzzyCompletions("fulltext", "granti")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getFuzzyCompletions("fulltext", "akbanq")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getFuzzyCompletions("ownedBy", "meta")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getFuzzyCompletions("owns", "tesl")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getFuzzyCompletions("owns", "factbook")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getFuzzyCompletions("ownedBy", "mars zuckerberg")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
getFuzzyCompletions("ownedBy", "mark zuckerberk")
  .then((data) => { console.log(data) })
  .catch((error) => console.error(error))
