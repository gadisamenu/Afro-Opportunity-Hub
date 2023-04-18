export {}

declare global {
  namespace Express {
    interface Response {
      searchResult: any
    }
    interface Request {
      searchResult: any
    }
  }
}