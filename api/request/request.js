/**
 * version 1.1.2
 */

class Request {
  constructor(config = {}) {
    this.config = {};
    this.config.baseUrl = config.baseUrl? config.baseUrl: '';
    this.config.dataType = config.dataType? config.dataType: 'json';
    this.config.responseType = config.responseType? config.responseType: 'text';
    this.config.header = config.header? config.header: {};
    this.reqInterceptors = null;
    this.resInterceptors = null;
    this.interceptors = {
      request: fn => {
        this.reqInterceptors = fn;
      },
      response: fn => {
        this.resInterceptors = fn;
      },
    }
  }
  async get(url, config = {}) {
    return this._request('get', url, config);
  }
  async post(url, config = {}) {
    return this._request('post', url, config);
  }
  async put(url, config = {}) {
    return this._request('put', url, config);
  }
  async delete(url, config = {}) {
    return this._request('delete', url, config);
  }
  setConfig(config = {}) {
    this.config = Object.assign({}, this._merge(this.config, config));
  }
  _request(method, url, config) {
    const _this = this;
    let newConfig = Object.assign({}, this._merge(this.config, config));
    let lastConfig = {};

    if (this.reqInterceptors && typeof this.reqInterceptors === 'function') {
      let reqInterceptors = this.reqInterceptors(newConfig);
      if (!reqInterceptors) {
        if (process.env.NODE_ENV === "development") {
          console.log('请求被拦截，此消息仅在开发环境显示。')
        }
        return false;
      }
      lastConfig = Object.assign({}, reqInterceptors);
    } else {
      lastConfig = Object.assign({}, newConfig)
    }
    return new Promise((resolve, reject) => {
      uni.request({
        url: _this._formatUrl(lastConfig.baseUrl, url),
        method,
        data: lastConfig.data? lastConfig.data: {},
        header: lastConfig.header,
        dataType: lastConfig.dataType,
        responseType: lastConfig.responseType,
        complete(response) {
          let res = response;
          if (!res.statusCode || res.statusCode !== 200) {
						let resInterceptors = _this.resInterceptors(res);
						res = resInterceptors;
            reject(res);
			console.log(res)
            return;
          } 
		  // if(res.statusCode == 200){
			 //  console.log(res)
		  // }
          if (_this.resInterceptors && typeof _this.resInterceptors === 'function') {
            let resInterceptors = _this.resInterceptors(res);
            if (!resInterceptors) {
              reject('返回值已被您拦截！');
              return;
            } else {
              res = resInterceptors;
            }
          }
          resolve(res);
        }
      });
    })
  }
  _formatUrl(baseUrl, url) {
    if (!baseUrl) return url;
    let formatUrl = '';
    const baseUrlEndsWithSlash = baseUrl.endsWith('/');
    const urlStartsWithSlash = url.startsWith('/');
    if (baseUrlEndsWithSlash && urlStartsWithSlash) {
      formatUrl = baseUrl + url.substring(1);
    } else if (baseUrlEndsWithSlash || urlStartsWithSlash) {
      formatUrl = baseUrl + url;
    } else {
      formatUrl = baseUrl + '/' + url;
    }
    return formatUrl;
  }
  _merge(oldConfig, newConfig) {
    let mergeConfig = Object.assign({}, oldConfig);
    if (!newConfig || !Object.keys(newConfig).length) return mergeConfig;
    for (let key in newConfig) {
      if (key !== 'header') {
        mergeConfig[key] = newConfig[key];
      } else {
        if (Object.prototype.toString.call(newConfig[key]) === '[object Object]') {
          for (let headerKey in newConfig[key]) {
            mergeConfig[key][headerKey] = newConfig[key][headerKey];
          }          
        }
      }
    }
    return mergeConfig;
  }
}

if (!global.$request) {
  global.$request = new Request();
}

export default global.$request;
