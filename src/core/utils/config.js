const campay = {
    URL: 'https://demo.campay.net/api',
    USERNAME: '1vNp-rV9fAhWvXTOPlgRbA3aivOu31Jw1aOMyKytpID6Oa_mpgSFiAbqSdOtFD5jlJN6iaPCoeBlakZetEjUEw',
    PASSWORD: 'rRcQgWb9jUfZssFwEY0UfbfdY_aoGK7FDH3400X9rjbhnJF7Zc7DDuzrxMTbYJpGEeF0nkFmAPQcVXJTuLYL_g',
}

const config = {
    URL: process.env.REACT_APP_API_HOST || 'http://localhost:8000/',
    CAMPAY: process.env.REACT_APP_CAMPAY_HOST || campay.URL,
    CAMPAY_USERNAME: process.env.REACT_APP_CAMPAY_USERNAME || campay.USERNAME,
    CAMPAY_PASSWORD: process.env.REACT_APP_CAMPAY_PASSWORD || campay.PASSWORD
}



export default config
