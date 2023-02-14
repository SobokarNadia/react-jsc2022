const baseUrlJPl = 'https://jsonplaceholder.typicode.com';
const baseUrlCars = 'http://owu.linkpc.net/carsAPI/v2';

const auth = '/auth'

const urls = {
    users: '/users',
    comments: '/comments',
    cars: '/cars',
    auth: {
        login: auth,
        me: `${auth}/me`,
        refresh: `${auth}/refresh`
    }
}

export {baseUrlCars, baseUrlJPl, urls}