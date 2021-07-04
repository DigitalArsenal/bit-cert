import assert from "assert";
import { keymaster } from "../src/index";
import { pbkdf2Sync, scryptSync } from 'crypto';
import * as argon2 from "argon2";

let curves = {
    secp256k1: 'K-256',
    secp256r1: 'P-256',
};

it("creates a certificate from a buffer", async function () {
    let km = new keymaster(curves.secp256k1);
    let privateKeyHex = new Array(64).join("0") + "1";
    let privateKeyHexBuffer = Buffer.from(
        privateKeyHex,
        'hex');
    let bip39 = `abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon diesel`;
    await km.import(privateKeyHexBuffer);
    assert.strictEqual((await km.hex()), privateKeyHex);
    assert.strictEqual(await km.bip39(), bip39);
});