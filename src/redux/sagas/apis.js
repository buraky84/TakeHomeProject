import * as axios from 'axios';
import {FTX_API_URL} from '../../config/consts';

class apis {
  getMarkets = () => {
    return axios.get(`${FTX_API_URL}/markets`);
  };
}

export default new apis();
