const lightwallet = require('eth-lightwallet');

// This function will generate mnemonic everytime you run it.

function mnemonic() {
    var secretSeed = lightwallet.keystore.generateRandomSeed();
    console.log("Your mnemonic is :", secretSeed)
    return secretSeed;
}

mnemonic()


// This function is to check mnemonic whether it is valid or not.

function checkMnemonic(mnemonic){
    var checkSeed = lightwallet.keystore.isSeedValid(mnemonic)
    console.log("Your mnemonic is => \t",checkSeed);
    return checkSeed;
}

checkMnemonic("velvet story donkey figure doll fiscal unfold travel apart elephant tail outside")


// This will generate wallet address and private key. DOn't disclose private key with anyone.
function walletAddressGenerator(password,mnemonic){
    lightwallet.keystore.createVault({
        password: password,
        seedPhrase: mnemonic,
        //random salt 
        hdPathString: "m/0'/0'/0'"
      }, function (err, ks) {
        global_keystore = ks
        // console.log('ks: ', ks)
        
        if (password == '') {
          res.json({ERR: 'Password not found'})
        }
        var address = '0x...'
        global_keystore.keyFromPassword(password, function(err, pwDerivedKey) {
        global_keystore.generateNewAddress(pwDerivedKey, 1);
        var addresses = global_keystore.getAddresses();
        console.log('\n Ethereum Address generated: ', addresses)
      
            var address = addresses[0];
            var pk = global_keystore.exportPrivateKey(address, pwDerivedKey);
            console.log("\n \nPrivate Key: Don't disclose this with anyone.",pk);

            return address, pk ;
            
        })
    })
  }
  
  
walletAddressGenerator("password","velvet story donkey figure doll fiscal unfold travel apart elephant tail outside")