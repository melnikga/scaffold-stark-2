/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    TestTypes: {
      address:
        "0x01d6f0c4f17798b4a7c816f7d413a0f113c800f076276d67e0e3d9e73f8b2d8e",
      abi: [
        {
          type: "impl",
          name: "TestTypes",
          interface_name: "contracts::TestTypes::ITestTypes",
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::TestTypes::ITestTypes",
          items: [
            {
              type: "function",
              name: "set_uint8",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u8",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "set_uint16",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u16",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "set_uint32",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u32",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "set_uint64",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u64",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "set_uint128",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u128",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "set_uint256",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u256",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_uint8",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u8",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint8_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u8",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u8",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint16",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u16",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint16_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u16",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u16",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint32",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint32_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u32",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint64",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint64_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u64",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint128",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u128",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint128_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u128",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u128",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint256",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_uint256_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u256",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::TestTypes::TestTypes::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
  },
} as const;

export default deployedContracts;
