import fetch from 'isomorphic-fetch'

const cryptofile = './databaseCrypto.json'


// This function gets the list of coins and store them in cache if the timeout is still valid
// I store the list in a databaseCrypto.json file
// It allows me to avoid having the 503 too many requests from the API

// Si db content vide => save data + timestamp

// Si content.timestamp + timeout < currentTimestamp => save data + new timestamp

// Sinon send GetDB
export const getListCoins = (req, res) => {
    try {
        const timeout = 1800;
        const currentTimestamp = Math.ceil(Date.now());
        db.getDb(cryptofile).then(content => {

            console.log(content)

            const currentTimestamp = Math.ceil(Date.now()/1000)
            const timestamp = content.timestamp;
            if (content.timestamp === null || timestamp !== null && currentTimestamp > timestamp + timeout) {
                console.log('goes here')
                fetch('https://quantifycrypto.com/api/v1.0-beta/prices',
                {
                    method: 'GET',
                    headers: {
                        'Qc-Access-Key-Id': process.env.PUBLIC_KEY,
                        'Qc-Secret-Key': process.env.SECRET_KEY
                    }
                })
                .then(data => data.json())
                .then(result => {
                    const tosave = { timestamp: Math.ceil(Date.now()/1000), data: result}
                    db.saveDb(tosave, cryptofile)
                    .then(data => {
                        if (typeof(result) !== 'array' ) {
                            res.status(200).json({success: false, data: result})
                        }
                        else {
                            res.status(200).json({success: true, data: result})
                        }
                    })
                    .catch(err => {
                        res.json({success: false, data: err})
                    })
                })
            } else {
                console.log('Just send whats in the dbfile')
                res.status(200).json({success: true, data: content.data})
            }
        })
    }
    catch {
        console.error('error in the getListCoin function')
    }
}

export const getIndicators = (req, res) => {
    try {
        coin = req.params.coin
        console.log(coin)
        fetch('https://quantifycrypto.com/api/v1.0-beta/coin/' + coin,
                {
                    method: 'GET',
                    headers: {
                        'Qc-Access-Key-Id': process.env.PUBLIC_KEY,
                        'Qc-Secret-Key': process.env.SECRET_KEY
                    }
                }).then(data => data.json())
                .then(data => {
                    console.log(data)
                    res.status(200).json({success: true, indicators: data})
                })
                .catch(err => {
                    res.status(500).json({success: false, indicators: 'error during request'})
                })
    }
    catch {
        res.status(500).json({success: false, indicators: 'internal error'})
    }
}

export const ethExplorer = (req, res) => {
    const time = Math.floor(new Date().getTime() / 1000)
    const token = process.env.API_KEY
    fetch('https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=' + time + '&closest=before&apikey=' + token)
      .then(data => data.json())
      .then(response => {
        fetch('https://api.etherscan.io/api?module=block&action=getblockreward&blockno=' + response.result + '&apikey=' + token)
            .then(data => data.json())
            .then(response => {
            res.status(200).json({success: true, data: response})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({success: false, data: 'error in the etherscan.io request'})
            })
        })
}

export const getLocalCryptoStorage = (req, res) => {
    db.getDb(cryptofile).then(content => {
        // console.log(content)
        res.status(200).json({success: true, data: content})
    })
    .catch(err => {
        res.status(500).json({success: false, data: err})
    })
}