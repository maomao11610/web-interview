// AbortController基础使用
const controller = new AbortController();
axios
  .get("url", {
    signal: controller.signal,
  })
  .then((res) => {
    //...
  });
// 取消本次请求
controller.abort();
// 封装取消请求的类AxiosCancel，该类用于取消正在进行的请求
/***
 * 1.创建一个pendingRequest对象，用于存储每个请求的标识requestKey和对应的取消控制器AbortController
 * 2.当一个请求被发出时，判断请求的requestKey是否在pendingRequest对象中，不存在就为本次请求创建一个新的controller,并将controller的signal属性挂载到该请求的config属性上，若已存在就获取之前的controller并挂载到当前请求的config上
 * 3.需要取消重复请求时，使用对应的controller.abort()
 */
import type { AxiosRequestConfig } from "axios";
import qs from "qs"; //json对象序列化的库，同JSON.parse(),JSON.stringfy()
class AxiosCanceler {
  pendingRequest: Map<String, AbortController>;
  constructor() {
    this.pendingRequest = new Map<string, AbortController>();
  }
  // 修饰格式
  generateRequestKey(config: AxiosRequestConfig): string {
    const { method, url } = config;
    return [
      url || "",
      method || "",
      qs.stringfy(config.params),
      qs.stringfy(config.data),
    ].join("&"); //按照'&'组成字符串
  }
  addPendingRequest(config: AxiosRequestConfig) {
    const requestKey: string = this.generateRequestKey(config);
    if (!this.pendingRequest.has(requestKey)) {
      //不存在，新建controller给当前挂载config.signal
      const controller = new AbortController();
      config.signal = controller.signal;
      this.pendingRequest.set(requestKey, controller);
    } else {
      //已存在，获取之前的controller给其挂载
      config.signal = (
        this.pendingRequest.get(requestKey) as AbortController
      ).signal;
    }
  }
  removePendingRequest(config: AxiosRequestConfig) {
    const requestKey: string = this.generateRequestKey(config);
    if (this.pendingRequest.has(requestKey)) {
      // 取消请求
      (this.pendingRequest.get(requestKey) as AbortController).abort();
      // 从pendingRequest中删掉
      this.pendingRequest.delete(requestKey);
    }
  }
}
export const AxiosCancelerClass = new AxiosCanceler();

// axios拦截器中使用封装好的cancel 及axios封装
/**
 * 关键点
 * 1.基本配置：请求前缀【环境区分】，请求头：跨域携带cookie、token、timeout等
 * 2.拦截器【请求、响应】，在拦截器中做一定操作【格式转化、自定义请求头、状态码业务区分，错误处理、重复请求添加】
 * 3.常用请求方法统一封装【未必，依据业务区分】
 * 4.能够二次确认【可选】
 * 5.能够取消重复
 */
import Axios from "axios";
import { AxiosCancelerClass } from "./axiosCancelClass";
// 创建一个实例，此后都在此实例上改造
const axios = Axios.create({
  timeout: 1000 * 4,
  withCredentials: true, //跨域请求携带cookie
  headers: {
    get: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    post: {
      "Content-Type": "application/json;charset=utf-8",
    },
  },
});
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断是否存在token
    // 如果存在，则统一在http请求的header都加上token
    const token = localStorage.getItem("token");
    token && (config.headers.Authorization = token);
    // NOTE  添加自定义头部
    config.headers["custom-header"] = "testtest";
    // 检查是否存在重复请求，存在则取消已发不用的请求
    AxiosCancelerClass.removePendingRequest(config);
    // 把当前需要的请求添加到pendingRequest
    AxiosCancelerClass.addPendingRequest(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    AxiosCancelerClass.removePendingRequest(response.config);
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      if (response.data.code === 401) {
        // 未授权调取授权接口
      } else if (response.data.code === 403) {
        // 未登录跳转登录页
      } else {
        return Promise.resolve(response.data);
      }
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    AxiosCancelerClass.removePendingRequest(error.config || {});
    if (axios.isCancel(error)) {
      return {
        success: false,
        message: "重复了",
      };
    }
    // 我们可以在这里对异常状态作统一处理
    if (error.response.status) {
      // 处理请求失败的情况
      // 对不同返回码对相应处理
      return Promise.reject(error.response);
    }
  }
);

export default axios;
