const ethers = require("ethers")

/**
 * RPC Providers
 */
const providers = {
  1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  4: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  10: "https://mainnet.optimism.io",
  56: "https://bsc-dataseed.binance.org/",
  137: "https://rpc-mainnet.maticvigil.com/",
  100: "https://rpc.xdaichain.com/",
}

/**
 * hasValidKey
 * @param {*} userAddress
 * @param {*} lockAddress
 * @param {*} network
 * @returns
 */
const hasValidKey = async (userAddress, lockAddress, network) => {
  const provider = new ethers.providers.JsonRpcProvider(providers[network])
  const lock = new ethers.Contract(
    lockAddress,
    ["function getHasValidKey(address _owner) constant view returns (bool)"],
    provider
  )

  return lock.getHasValidKey(userAddress)
}

/**
 *
 * @param {*} signature
 * @param {*} slug
 * @param {*} locks
 * @returns
 */
const authorized = async (signature, slug, locks) => {
  if (!signature) {
    console.info(`Author needs to sign ${slug}`)
    return false
  }

  console.info(`Checking signature for ${slug}`)
  const signerAddress = ethers.utils.verifyMessage(slug, signature)

  const results = (
    await Promise.all(
      locks.map(lock => hasValidKey(signerAddress, lock.address, lock.network))
    )
  ).filter(x => x)

  return results.length > 0
}

module.exports = {
  authorized,
}
