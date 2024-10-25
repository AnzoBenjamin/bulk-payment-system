import axios from 'axios';

class ApiCalls {
  base_url = () => {
    if (process.env.NODE_ENV === 'production') {
      return `${process.env.REACT_APP_SERVER_API_URL_PROD}`;
    } else if (process.env.NODE_ENV === 'development') {
      return `${process.env.REACT_APP_SERVER_API_URL_DEV}`;
    } else if (process.env.NODE_ENV === 'staging') {
      return `${process.env.REACT_APP_SERVER_API_URL_DEV}`;
    } else {
      return '';
    }
  };

  register(data) {
    return axios({
      method: 'post',
      url: `${this.base_url()}/auth/register/`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      headers: {
        'Content-type': 'application/json'
      },
      data: data
    });
  }
  login(data) {
    return axios({
      method: 'post',
      url: `${this.base_url()}/auth/login/`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      headers: {
        'Content-type': 'application/json'
      },
      data: data
    });
  }
  logout(access_token) {
    return axios({
      method: 'post',
      url: `${this.base_url()}/auth/logout/`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      headers: {
        'Content-type': 'application/json',
        Authorizations: `Basic ${access_token}`
      }
    });
  }
  getUserDetails(id, access_token) {
    return axios({
      method: 'get',
      url: `${this.base_url()}/users/${id}/`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      withCredentials: true,
      headers: {
        'Content-type': 'application/json',
        Authorizations: `Basic ${access_token}`
      }
    });
  }

  postRequest(data, url, access_token = undefined) {
    let headers = {
      'Content-type': 'application/json'
    };
    if (access_token !== undefined) {
      headers.Authorizations = `Basic ${access_token}`;
    }
    return axios({
      method: 'post',
      url: `${this.base_url()}${url}`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      headers: headers,
      data: data
    });
  }
  getRequest(url, access_token, limit = 100, is_next_prev = false) {
    let headers = {
      'Content-type': 'application/json'
    };
    if (access_token !== undefined) {
      headers.Authorizations = `Basic ${access_token}`;
    }
    return axios({
      method: 'get',
      url: is_next_prev ? url : `${this.base_url()}${url}`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      headers: headers,
    });
  }

  changePassword(user_id, data, access_token) {
    return axios({
      method: 'post',
      url: `${this.base_url()}/auth/portal/change_password/${user_id}`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      headers: {
        'Content-type': 'application/json',
        Authorizations: `Basic ${access_token}`
      },
      data: data
    });
  }

  updateAdmin(admin_id, data, access_token) {
    return axios({
      method: 'put',
      url: `${this.base_url()}/update_admins/${admin_id}/`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      headers: {
        'Content-type': 'application/json',
        Authorizations: `Basic ${access_token}`
      },
      data: data
    });
  }
  deleteAdminUser(access_token, id) {
    return axios({
      method: 'delete',
      url: `${this.base_url()}/admins/${id}/`,
      timeout: 120000,
      timeoutErrorMessage: 'An Error occurred. Request has taken too long',
      headers: {
        'Content-type': 'application/json',
        Authorizations: `Basic ${access_token}`
      }
    });
  }
}

export default ApiCalls;
