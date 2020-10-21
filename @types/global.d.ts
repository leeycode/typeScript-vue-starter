declare const config: {
  version: string;
  systemName: string;
  debug: boolean;
};

declare interface ResponseBody<T> {
  data: T;
  code: number;
  total: number;
}
declare interface ResponseStatus {
  loading: boolean;
  error: boolean;
}
declare interface Responsed<T> extends ResponseStatus {
  res: ResponseBody<T>;
}
declare interface ResponseNotPage<T> extends ResponseStatus {
  data: T;
}
declare interface PageParams {
  page: number;
  pageSize: number;
}
declare interface RequsetParams extends PageParams {
  search: string;
}
