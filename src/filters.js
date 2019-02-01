import Vue from "vue";
import * as moment from "moment";
import BigNumber from "bignumber.js";

Vue.filter("locale", value => value.toLocaleString());
Vue.filter("date", timestamp => new Date(timestamp * 1000).toLocaleString());
Vue.filter("ago", timestamp => moment(new Date(timestamp * 1000)).fromNow());
Vue.filter("abbr", id => {
  if (id.length === 66) {
    return `${id.slice(0, 10)}…${id.slice(58)}`;
  } else if (id.length === 42) {
    return `${id.slice(0, 8)}…${id.slice(36)}`;
  }
  return id;
});
Vue.filter("amount", val =>
  new BigNumber(val).div("1" + "0".repeat(18)).toFormat()
);
