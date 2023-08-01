import { MessageType, JsonWriteOptions } from '@bufbuild/protobuf'
import {
  baseRegistryTypes,
  authzRegistryTypes,
  bankRegistryTypes,
  cryptoRegistryTypes,
  distributionRegistryTypes,
  erc20RegistryTypes,
  evmRegistryTypes,
  govRegistryTypes,
  ibcRegistryTypes,
  microtxRegistryTypes,
  stakingRegistryTypes,
  transactionsRegistryTypes,
} from '../messages/index'

const parseType = (registryTypes: MessageType[], typeName: string) => {
  for (const type of registryTypes) {
    if (`/${type.typeName}` === typeName) {
      return type
    }
  }
  return undefined
}

export const registryTypes = [
  ...baseRegistryTypes,
  ...authzRegistryTypes,
  ...bankRegistryTypes,
  ...cryptoRegistryTypes,
  ...distributionRegistryTypes,
  ...erc20RegistryTypes,
  ...evmRegistryTypes,
  ...govRegistryTypes,
  ...ibcRegistryTypes,
  ...microtxRegistryTypes,
  ...stakingRegistryTypes,
  ...transactionsRegistryTypes,
]

export const registry = {
  findMessage: (typeName: string): MessageType | undefined => {
    return parseType(registryTypes, typeName)
  },
}

export const JSONOptions: JsonWriteOptions = {
  emitDefaultValues: true,
  enumAsInteger: true,
  useProtoFieldName: true,
  typeRegistry: registry,
}
