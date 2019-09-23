/**
 * 封装axios,暴露GET,POST方法
 */
import axios from "axios";
import qs from "qs";
import { Toast } from "vant";

// 配置
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.timeout = 10 * 1000;
axios.defaults.baseURL = "yourBaseUrl";

// 请求拦截器
var num = 0;
axios.interceptors.request.use(
    config => {
        num++;
        Toast.loading({
            message: "加载中"
        });
        return config;
    },
    error => {
        return Promise.error(error);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    response => {
        num--;
        if (num <= 0) {
            Toast.clear();
        }
        if (response.status === 200) {
            return Promise.resolve(response);
        }else{
          // 针对不同的错误码进行相关处理
        }
    },
    error => {
        Toast.clear();
        Toast({
            message: "网络异常",
            position: "center",
            duration: 1000
        });
        return Promise.reject(error);
    }
);

/**
 * GET
 * @param {String} url
 * @param {Object} params
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            });
    });
}

/**
 * POST
 * @param {String} url
 * @param {Object} params
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, qs.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            });
    });
}
