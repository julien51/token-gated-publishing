# Token Gated publishing

Unlock is a protocol for membership. It provides a easy way for any application to determine if a user is a member of a specific community.

Here we want to show-case what membership-gated publishing can be.

Our goal was to build a very basic blogging tool (we use the [Gatsby starter blog](https://github.com/gatsbyjs/gatsby-starter-blog)) where only members of a specific community can publish.

The community is identified as "people who own a particular NFT in their wallet".

## Demo!

Here is the example [token gated community blog](https://tokengatedpublishingmain.gatsbyjs.io/hello-world/). To create it, we deployed the code in this repo and configured it so that only the people who own a key to a particular [Unlock Protocol](https://unlock-protocol.com/) lock (an NFT contract) could access it.

The contract is at `0x889559AD98a3438bA6D471491A8Cd9c7C4c640b6` on Rinkeby.
You can get a membership for yourself [by clicking here](https://app.unlock-protocol.com/checkout?redirectUri=https%3A%2F%2Ftokengatedpublishingmain.gatsbyjs.io%2F&paywallConfig=%7B%22locks%22%3A%7B%220x889559AD98a3438bA6D471491A8Cd9c7C4c640b6%22%3A%7B%22network%22%3A4%7D%7D%2C%22pessimistic%22%3Atrue%2C%22persistentCheckout%22%3Atrue%2C%22icon%22%3A%22https%3A%2F%2Flocksmith.unlock-protocol.com%2Flock%2F0x889559AD98a3438bA6D471491A8Cd9c7C4c640b6%2Ficon%22%7D).

Once you have the NFT in your wallet, you can author a new post with these steps:

* Create a new markdown file in the `content/blog` folder
* Generate the signature of the _slug_ of your post, signed with your wallet - You can use a tool like [MyCrypto](https://app.mycrypto.com/sign-message) to generate the signature
* Add that signature as the value of the `signature` field in the front-matter of your post, as shown in the screenshot below
* Open a PR on the repo with your changes

The build script will look at the signer of `signature` field in the post. If that address does indeed have a valid membership NFT, the post will be published!

<img width="466" alt="CleanShot 2022-02-11 at 11 41 13@2x" src="https://user-images.githubusercontent.com/50103/153579854-a5bcf12a-20d5-4ff6-abe1-40f6863c5ed5.png">

## Usage and Deployment

1. Fork this repo
2. TODO: explain or link to guide for creating the lock
3. TODO: show where in the build script to specify the lock


