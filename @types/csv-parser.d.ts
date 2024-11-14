declare module "csv-parser" {
  import { Transform } from "stream";

  interface CsvParserOptions {
    headers?: boolean | string[];
    separator?: string;
    quote?: string;
    escape?: string;
    strict?: boolean;
    from_line?: number;
    mapHeaders?: (header: string) => string;
    mapValues?: (value: string, header: string) => any;
  }

  function csvParser(options?: CsvParserOptions): Transform;

  export default csvParser;
}
