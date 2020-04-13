// package: item
// file: item.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AddonItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddonItem.AsObject;
  static toObject(includeInstance: boolean, msg: AddonItem): AddonItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddonItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddonItem;
  static deserializeBinaryFromReader(message: AddonItem, reader: jspb.BinaryReader): AddonItem;
}

export namespace AddonItem {
  export type AsObject = {
    id: string,
    name: string,
    price: number,
    available: boolean,
    description: string,
  }
}

export class Addon extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRestId(): string;
  setRestId(value: string): void;

  clearAddonItemList(): void;
  getAddonItemList(): Array<AddonItem>;
  setAddonItemList(value: Array<AddonItem>): void;
  addAddonItem(value?: AddonItem, index?: number): AddonItem;

  getType(): TypeMap[keyof TypeMap];
  setType(value: TypeMap[keyof TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Addon.AsObject;
  static toObject(includeInstance: boolean, msg: Addon): Addon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Addon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Addon;
  static deserializeBinaryFromReader(message: Addon, reader: jspb.BinaryReader): Addon;
}

export namespace Addon {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    restId: string,
    addonItemList: Array<AddonItem.AsObject>,
    Type: TypeMap[keyof TypeMap],
  }
}

export class Item extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getRatings(): number;
  setRatings(value: number): void;

  getRatingsCount(): number;
  setRatingsCount(value: number): void;

  getOrderCount(): number;
  setOrderCount(value: number): void;

  getCategoryId(): string;
  setCategoryId(value: string): void;

  getSubCategoryId(): string;
  setSubCategoryId(value: string): void;

  clearSplCategoriesList(): void;
  getSplCategoriesList(): Array<SpecialCategoryMap[keyof SpecialCategoryMap]>;
  setSplCategoriesList(value: Array<SpecialCategoryMap[keyof SpecialCategoryMap]>): void;
  addSplCategories(value: SpecialCategoryMap[keyof SpecialCategoryMap], index?: number): SpecialCategoryMap[keyof SpecialCategoryMap];

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  clearTimingsList(): void;
  getTimingsList(): Array<TimingsMap[keyof TimingsMap]>;
  setTimingsList(value: Array<TimingsMap[keyof TimingsMap]>): void;
  addTimings(value: TimingsMap[keyof TimingsMap], index?: number): TimingsMap[keyof TimingsMap];

  getPriority(): number;
  setPriority(value: number): void;

  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  getVeg(): boolean;
  setVeg(value: boolean): void;

  clearAddonsList(): void;
  getAddonsList(): Array<Addon>;
  setAddonsList(value: Array<Addon>): void;
  addAddons(value?: Addon, index?: number): Addon;

  getRestId(): string;
  setRestId(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    price: number,
    ratings: number,
    ratingsCount: number,
    orderCount: number,
    categoryId: string,
    subCategoryId: string,
    splCategoriesList: Array<SpecialCategoryMap[keyof SpecialCategoryMap]>,
    tagsList: Array<string>,
    imagesList: Array<string>,
    timingsList: Array<TimingsMap[keyof TimingsMap]>,
    priority: number,
    available: boolean,
    veg: boolean,
    addonsList: Array<Addon.AsObject>,
    restId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Id extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Id.AsObject;
  static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Id;
  static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
  export type AsObject = {
    id: string,
  }
}

export class RestId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestId.AsObject;
  static toObject(includeInstance: boolean, msg: RestId): RestId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestId;
  static deserializeBinaryFromReader(message: RestId, reader: jspb.BinaryReader): RestId;
}

export namespace RestId {
  export type AsObject = {
    id: string,
  }
}

export interface TypeMap {
  CHECKBOX: 0;
  RADIO_BUTTON: 1;
  SLIDER: 2;
}

export const Type: TypeMap;

export interface TimingsMap {
  BREAKFAST: 0;
  LUNCH: 1;
  SNACKS: 2;
  DINNER: 3;
}

export const Timings: TimingsMap;

export interface SpecialCategoryMap {
  CHEFS_SPECIAL: 0;
  TODAYS_SPECIAL: 1;
}

export const SpecialCategory: SpecialCategoryMap;

