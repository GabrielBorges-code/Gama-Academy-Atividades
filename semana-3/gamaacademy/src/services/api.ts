import axios from "axios";

export const api = axios.create({
    // baseURL: 'https://webhook.site/1ff3e543-18ea-4751-9642-da085cf19b83'
    // baseURL: 'https://webhook.site/52bc3190-6942-46fa-b079-ec9113d6373f'
    baseURL: 'https://dev-marcilio-afya.herokuapp.com/'
    // baseURL: 'https://sistemadeagendamento-san5v.ondigitalocean.app/'

})