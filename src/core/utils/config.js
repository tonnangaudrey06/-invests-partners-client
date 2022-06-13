const campay = {
    URL: 'https://demo.campay.net/api/',
    USERNAME: 'qTY7cW3OTfLB3y43GMhO_M7eXGqd-xkYGhLky8ZVfgZgC31IOf384F7qgjrxuFeMlK2yBWZwVgASqAgZCGMv3w',
    PASSWORD: 'EsDOgM5_CxyLAzLrPcXM3hSAF3W2rhLlUctyaZQRWNGrS0xaQ93-LjKllZ4B6Mdr3XJqEA2Z891zpGeVpRYM7Q',
}

const config = {
    URL: process.env.REACT_APP_API_HOST || 'http://localhost:8000/',
    CAMPAY: process.env.REACT_APP_CAMPAY_HOST || campay.URL,
    CAMPAY_USERNAME: process.env.REACT_APP_CAMPAY_USERNAME || campay.USERNAME,
    CAMPAY_PASSWORD: process.env.REACT_APP_CAMPAY_PASSWORD || campay.PASSWORD
}

export default config
