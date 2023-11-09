import axios, { AxiosResponse } from 'axios';
export const isOdd = (n: number): boolean => {
  return !!(n & 1);
};


class GLEIFAPIWrapper {
  private baseURL: string;

  constructor(baseURL: string = 'https://api.gleif.org/api/v1/') {
    this.baseURL = baseURL;
  }

  async getLEIRecordByID(id: string): Promise<LEIRecord> {
    const url = `${this.baseURL}lei-records/${id}`;
    const response: AxiosResponse<LEIRecord> = await axios.get(url, {
      headers: { Accept: 'application/vnd.api+json' },
    });
    return response.data;
  }

  async getFuzzyCompletions(field: string, q: string): Promise<any> {
    const url = `${this.baseURL}fuzzycompletions?field=${field}&q=${q}`;
    const response: AxiosResponse<any> = await axios.get(url);
    return response.data;
  }

  async getAutocompletions(field: string, q: string): Promise<Autocompletion[]> {
    const url = `${this.baseURL}autocompletions?field=${field}&q=${q}`;
    const response: AxiosResponse<{ data: Autocompletion[] }> = await axios.get(url, {
      headers: { Accept: 'application/vnd.api+json' },
    });
    return response.data.data;
  }
}

export default GLEIFAPIWrapper;
