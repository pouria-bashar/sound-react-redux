import axios from 'axios';
import config from './config';

const apiPaths = config.paths;

export default class SoundCloudApiClinet {

  getClient() {
    const instance = axios.create(config.axiosConfig);
    return instance;
  }

  /**
   * -----------------API methods---------------------
   */

  getInitialTracks() {
    const queryParam = '?q=tiesto';
    const url = apiPaths.search + queryParam;
    return this.getClient().get(url);
  }


  searchTracks(q) {
    const queryParam = `?q=${q}`;
    const url = apiPaths.search + queryParam;
    return this.getClient().get(url);
  }
}
