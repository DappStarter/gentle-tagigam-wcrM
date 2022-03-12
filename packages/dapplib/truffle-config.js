require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan riot machine unfold guess arena equal gaze'; 
let testAccounts = [
"0x6c6f78887e85850202fc29633ff5550d1e3bbbc1d3199f0e35fb4a1fa04669d3",
"0x916427c391659f1388e0d6b059aa5573d473febbca9a04627c8f9ac92bbafdbb",
"0x22104275d81e5991718da0a93f00bf7e2b2d801b5871ff3f9e822827c22ca251",
"0x642483991927ce93cfd0d1a4e2bebbb8e0106f233c213bcd4c67fc95b2d074f5",
"0x6eedb6dbe2a014cdf9ff9c66baae100fb84cdfa9f278a64d5b45e05e87f7f684",
"0x81e7619d38197fdfdbb8634c52e690db304dfca9b7a9c7d3f9853a5ae6d16135",
"0xa942a111cbb7b737b37933589316873611b0ebe2e46257b8392318cb97afc5de",
"0x279c520c1f645579072add218de81ec3281f4e66e85fcfe456014b9a7ca8f426",
"0xc908575ace2ffa5882ffdf1be5a5860802483d7aa176352573e799da730b8d6c",
"0x7b2cfc93840030eb734339f2275512a1668308ff45697be0fefa438d3feb2695"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

