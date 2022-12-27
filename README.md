# first-fabric-chaincode

First hyperledger fabric chaincode written in JavaScript.

Reference: https://www.youtube.com/watch?v=azBTd3OYST0

### To run the project

Step 1: Clone the repository and go inside the scripts folder

```bash
git clone https://github.com/codeTIT4N/first-fabric-chaincode.git
cd first-fabric-chaincode
cd scripts
```

Step 2: Make sure you have docker and docker-compose installed then run the following command to start the fabric network test-network and deploy the chaincode to it

```bash
./startFabric.sh
```

Step 3: Interact with blockchain using the scripts inside the scripts/blockchain-interactions folder using node:

```bash
cd blockchain-interactions
node 1-enrollAdmin.js
```

This will create an admin wallet.

```bash
node 2-registerUser.js
```

This will register a new user.

```bash
node 3-invoke.js
```

This will invoke a transaction on the blockchain.

```bash
node 4-query.js
```

This will query the blockchain and return the data.

Step 4: Finally stop the network and remove the docker containers using:

```bash
cd ..
./networkDown.sh
```

Thankyou!
