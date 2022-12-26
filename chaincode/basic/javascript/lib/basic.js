/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

// always import in any chaincode
const { Contract } = require("fabric-contract-api");

class Basic extends Contract {
  //   1. initLedger

  async initLedger(ctx) {
    // ctx is context and stub had get and put methods
    await ctx.stub.putState("test", "hello world"); // putState stores info in key value pair
    return "success";
  }

  //   2. writeData
  async writeData(ctx, key, value) {
    await ctx.stub.putState(key, value);
    return value;
  }

  //   3. readData
  async readData(ctx, key) {
    let response = await ctx.stub.getState(key);
    return response.toString(); //done toString() because every data that goes in and comes outside ledger is in byte array
  }
}

module.exports = Basic;
