# Token Gated publishing

Unlock is a protocol for membership. It provides a easy way for any application to determine if a user is a member of a special community.

Here we want to show-case what token gated publishing can be.

Our goal was to build an very basic blogging tool (we use the [Gatsby starter blog](https://github.com/gatsbyjs/gatsby-starter-blog)) where only members of a special community can publish.

The community is identified as "people who own a special NFT in their crypto wallet".

## Demo!

There is an [token gated copmmunity blog](https://tokengatedpublishingmain.gatsbyjs.io/hello-world/). To do that, we deployed the code in this repo and configured it so that only the people who own a key to a special [Unlock Protocol](https://unlock-protocol.com/) lock (an NFT contract) could access it.

The contract is at `0x889559AD98a3438bA6D471491A8Cd9c7C4c640b6` on Rinkeby.
You can get a membership for yourself [by click here](https://app.unlock-protocol.com/checkout?redirectUri=https%3A%2F%2Ftokengatedpublishingmain.gatsbyjs.io%2F&paywallConfig=%7B%22locks%22%3A%7B%220x889559AD98a3438bA6D471491A8Cd9c7C4c640b6%22%3A%7B%22network%22%3A4%7D%7D%2C%22pessimistic%22%3Atrue%2C%22persistentCheckout%22%3Atrue%2C%22icon%22%3A%22https%3A%2F%2Flocksmith.unlock-protocol.com%2Flock%2F0x889559AD98a3438bA6D471491A8Cd9c7C4c640b6%2Ficon%22%7D).

Then, you can create a new markdown file in the `content/blog` folder but make sure you add a `signature` too. This signature is simply the _slug_ of your post signed with your wallet. You can use a tool like [MyCrypto](https://app.mycrypto.com/sign-message) to generate that signature. Then, open a PR!

The build scrip will look at the signer of the post and if that address does indeed own a valid membership, the post will be published!
