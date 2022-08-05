const CLA = {
  POLKADOT: 0x90,
  POLYMESH: 0x91,
  DOCK: 0x92,
  CENTRIFUGE: 0x93,
  EDGEWARE: 0x94,
  EQUILIBRIUM: 0x95,
  STATEMINT: 0x96,
  STATEMINE: 0x97,
  NODLE: 0x98,
  KUSAMA: 0x99,
  KARURA: 0x9a,
  ACALA: 0x9b,
  GENSHIRO: 0x9e,
  SORA: 0x9f,
  POLKADEX: 0xa0,
  BIFROST: 0xa1,
  REEF: 0xa2,
  XXNETWORK: 0xa3,
  ALEPHZERO: 0xa4,
  INTERLAY: 0xa5,
  PARALLEL: 0xa6,
  COMPOSABLE: 0xa8,
  ASTAR: 0xa9,
  STAFI: 0xac,
  UNIQUE: 0xad,
  BIFROSTKUSAMA: 0xae
}

// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
const SLIP0044 = {
  POLKADOT: 0x80000162,
  POLYMESH: 0x80000253,
  DOCK: 0x80000252,
  CENTRIFUGE: 0x800002eb,
  EDGEWARE: 0x8000020b,
  EQUILIBRIUM: 0x85f5e0fd,
  GENSHIRO: 0x85f5e0fc,
  STATEMINT: 0x80000162,
  STATEMINE: 0x800001b2,
  NODLE: 0x800003eb,
  KUSAMA: 0x800001b2,
  SORA: 0x80000269,
  POLKADEX: 0x8000031f,
  BIFROST: 0x80000314,
  KARURA: 0x800002ae,
  REEF: 0x80000333,
  ACALA: 0x80000313,
  XXNETWORK: 0x800007a3,
  PARALLEL: 0x80000162,
  ASTAR: 0x8000032a,
  COMPOSABLE: 0x80000162,
  STAFI: 0x8000038b,
  ALEPHZERO: 0x80000283,
  INTERLAY: 0x80000162,
  UNIQUE: 0x80000162,
  BIFROSTKUSAMA: 0x80000314,
}

const SS58_ADDR_TYPE = {
  POLKADOT: 0,
  KUSAMA: 2,
  EDGEWARE: 7,
  POLYMESH: 12,
  DOCK: 22, //mainnet
  CENTRIFUGE: 36,
  EQUILIBRIUM: 67,
  GENSHIRO: 67,
  STATEMINT: 0,
  STATEMINE: 2,
  NODLE: 37,
  SORA: 69,
  POLKADEX: 88,
  BIFROST: 6,
  KARURA: 8,
  REEF: 42,
  ACALA: 10,
  XXNETWORK: 55,
  PARALLEL: 172,
  ASTAR: 5,
  COMPOSABLE:49,
  STAFI: 20,
  ALEPHZERO: 42,
  INTERLAY: 2032,
  UNIQUE: 7391,
  BIFROSTKUSAMA: 6,
}

module.exports = {
  CLA,
  SLIP0044,
  SS58_ADDR_TYPE,
}
