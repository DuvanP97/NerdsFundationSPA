declare interface IDataDetail {
    name: string;
    description: string;
    imageSrc: string,
    imageAlt: string,
    href: string,
  }

  declare interface IHttpResponse<T> {
    okay: boolean;
    message: string;
    data: T | null;
  }