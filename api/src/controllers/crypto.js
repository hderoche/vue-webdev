import fetch from 'isomorphic-fetch'
const cryptofile = './databaseCrypto.json'


// This function gets the list of coins and store them in cache if the timeout is still valid
// I store the list in a databaseCrypto.json file
// It allows me to avoid having the 503 too many requests from the API

// Si db content vide => save data + timestamp

// Si content.timestamp + timeout < currentTimestamp => save data + new timestamp

// Sinon send GetDB
export const getListCoins = (req, res) => {

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
        console.log('from quantify')
        console.log(result)
        res.status(200).json({success: true, data: result})
    })
    .catch(err => {
        console.log('from error')
        res.status(200).json({success: false, data: err})
    })
}

export const getIndicators = (req, res) => {

    const coin = req.params.coin
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

