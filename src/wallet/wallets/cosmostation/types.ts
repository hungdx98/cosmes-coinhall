import { Keplr } from "../../../registry";

// Type is similar to Keplr
export type Cosmostation = Keplr;

export type Window = {
  cosmostation?:
    | {
        providers: {
          keplr: Cosmostation;
        };
      }
    | undefined;
};
