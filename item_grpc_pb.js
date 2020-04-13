// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var item_pb = require('./item_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_item_Id(arg) {
  if (!(arg instanceof item_pb.Id)) {
    throw new Error('Expected argument of type item.Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_item_Id(buffer_arg) {
  return item_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_item_Item(arg) {
  if (!(arg instanceof item_pb.Item)) {
    throw new Error('Expected argument of type item.Item');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_item_Item(buffer_arg) {
  return item_pb.Item.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_item_RestId(arg) {
  if (!(arg instanceof item_pb.RestId)) {
    throw new Error('Expected argument of type item.RestId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_item_RestId(buffer_arg) {
  return item_pb.RestId.deserializeBinary(new Uint8Array(buffer_arg));
}


var ItemServiceService = exports.ItemServiceService = {
  addItem: {
    path: '/item.ItemService/AddItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.Item,
    responseType: item_pb.Id,
    requestSerialize: serialize_item_Item,
    requestDeserialize: deserialize_item_Item,
    responseSerialize: serialize_item_Id,
    responseDeserialize: deserialize_item_Id,
  },
  getItem: {
    path: '/item.ItemService/GetItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.Id,
    responseType: item_pb.Item,
    requestSerialize: serialize_item_Id,
    requestDeserialize: deserialize_item_Id,
    responseSerialize: serialize_item_Item,
    responseDeserialize: deserialize_item_Item,
  },
  getRestItems: {
    path: '/item.ItemService/GetRestItems',
    requestStream: false,
    responseStream: true,
    requestType: item_pb.RestId,
    responseType: item_pb.Item,
    requestSerialize: serialize_item_RestId,
    requestDeserialize: deserialize_item_RestId,
    responseSerialize: serialize_item_Item,
    responseDeserialize: deserialize_item_Item,
  },
  updateItem: {
    path: '/item.ItemService/UpdateItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.Item,
    responseType: item_pb.Item,
    requestSerialize: serialize_item_Item,
    requestDeserialize: deserialize_item_Item,
    responseSerialize: serialize_item_Item,
    responseDeserialize: deserialize_item_Item,
  },
  deleteItem: {
    path: '/item.ItemService/DeleteItem',
    requestStream: false,
    responseStream: false,
    requestType: item_pb.Id,
    responseType: item_pb.Id,
    requestSerialize: serialize_item_Id,
    requestDeserialize: deserialize_item_Id,
    responseSerialize: serialize_item_Id,
    responseDeserialize: deserialize_item_Id,
  },
};

exports.ItemServiceClient = grpc.makeGenericClientConstructor(ItemServiceService);
