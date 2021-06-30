import * as assert from "assert";
import { keymaster } from "../src/index";
import { pbkdf2Sync, scryptSync } from 'crypto';
import * as argon2 from "argon2";

let curves = {
    secp256k1: 'K-256',
    secp256r1: 'P-256',
}

it("creates a certificate from a buffer", async function () {
    let km = new keymaster('K-256');
    await km.init(Buffer.from(
        new Array(33).join("0"),
        'hex'));
    console.log(km);
});