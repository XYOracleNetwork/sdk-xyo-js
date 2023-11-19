import { Provider, Signer } from 'ethers'

export class XyoEthersWrapperBase {
  protected provider: Provider

  protected signer?: Signer

  constructor(provider: Provider, signer?: Signer) {
    this.provider = provider
    this.signer = signer
  }
}
