// GENERATED CODE -- DO NOT EDIT!

// package: item
// file: item.proto

import * as item_pb from "./item_pb";
import * as grpc from "grpc";

interface IItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addItem: grpc.MethodDefinition<item_pb.Item, item_pb.Id>;
  getItem: grpc.MethodDefinition<item_pb.Id, item_pb.Item>;
  getRestItems: grpc.MethodDefinition<item_pb.RestId, item_pb.Item>;
  updateItem: grpc.MethodDefinition<item_pb.Item, item_pb.Item>;
  deleteItem: grpc.MethodDefinition<item_pb.Id, item_pb.Id>;
}

export const ItemServiceService: IItemServiceService;

export class ItemServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  addItem(argument: item_pb.Item, callback: grpc.requestCallback<item_pb.Id>): grpc.ClientUnaryCall;
  addItem(argument: item_pb.Item, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<item_pb.Id>): grpc.ClientUnaryCall;
  addItem(argument: item_pb.Item, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<item_pb.Id>): grpc.ClientUnaryCall;
  getItem(argument: item_pb.Id, callback: grpc.requestCallback<item_pb.Item>): grpc.ClientUnaryCall;
  getItem(argument: item_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<item_pb.Item>): grpc.ClientUnaryCall;
  getItem(argument: item_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<item_pb.Item>): grpc.ClientUnaryCall;
  getRestItems(argument: item_pb.RestId, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<item_pb.Item>;
  getRestItems(argument: item_pb.RestId, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<item_pb.Item>;
  updateItem(argument: item_pb.Item, callback: grpc.requestCallback<item_pb.Item>): grpc.ClientUnaryCall;
  updateItem(argument: item_pb.Item, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<item_pb.Item>): grpc.ClientUnaryCall;
  updateItem(argument: item_pb.Item, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<item_pb.Item>): grpc.ClientUnaryCall;
  deleteItem(argument: item_pb.Id, callback: grpc.requestCallback<item_pb.Id>): grpc.ClientUnaryCall;
  deleteItem(argument: item_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<item_pb.Id>): grpc.ClientUnaryCall;
  deleteItem(argument: item_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<item_pb.Id>): grpc.ClientUnaryCall;
}
