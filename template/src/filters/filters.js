import Vue from "vue";
import moment from "moment";

// 格式化时间
Vue.filter("formatDate", function(value, format) {
  return moment(value - 0).format(format);
});

// 格式化金额
Vue.filter("formatMoney", function(money) {
  if (money + "".indexOf(".") == -1) {
    return Math.round(money.toString().split(".")[0]).toLocaleString();
  } else {
    return Math.round(money.toString()).toLocaleString();
  }
});
