import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const defaultHeader: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export class HttpRequest {
  public async Get<T>(request: string): Promise<IHttpResponse<T>> {
    try {
      let headers = {
        ...defaultHeader,
        headers: { ...defaultHeader.headers },
      };
      const response = await axios.get(request, headers);

      return this.GetAxiosSuccessResponse(response);
    } catch (error) {
      return this.GetAxiosErrorResponse(error);
    }
  }

  private GetAxiosSuccessResponse<T>(response: AxiosResponse): IHttpResponse<T> {
    return {
      okay: true,
      message: '',
      data: response.data as T,
    };
  }

  private GetAxiosErrorResponse<T>(error: unknown): IHttpResponse<T> {
    return {
      okay: false,
      message: this.GetAxiosError(error),
      data: null,
    };
  }

  private GetAxiosError(error: unknown): string {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message;
    } else {
      return JSON.stringify(error);
    }
  }
}
