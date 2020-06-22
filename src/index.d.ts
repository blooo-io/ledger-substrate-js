import Transport from "@ledgerhq/hw-transport";

export interface ResponseBase {
  error_message: string;
  return_code: number;
}

export interface ResponseAddress extends ResponseBase {
  address: string;
  pubKey: string;
}

export interface ResponseVersion extends ResponseBase {
  device_locked: boolean;
  major: number;
  minor: number;
  patch: number;
  test_mode: boolean;
}

export interface ResponseSign extends ResponseBase {
  signature: Buffer;
}

declare class SubstrateApp {
  constructor(transport: Transport, CLA: number, slip0044: number);

  getVersion(): Promise<ResponseVersion>;
  getAddress(
    account: number,
    change: number,
    addressIndex: number,
    requireConfirmation?: boolean,
  ): Promise<ResponseAddress>;
  signSendChunk(chunkIdx: number, chunkNum: number, chunk: Buffer): Promise<ResponseSign>;
  sign(account: number, change: number, addressIndex: number, message: Buffer): Promise<ResponseSign>;
}

export type AppCreator = (transport: Transport) => SubstrateApp;

const newKusamaApp: AppCreator;
const newPolkadotApp: AppCreator;

export {
  newKusamaApp,
  newPolkadotApp
};
