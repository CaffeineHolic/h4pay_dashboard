import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Order from "@/views/Order";
import Gift from "@/views/Gift";
import Bulk from "@/views/Bulk/Bulk";
import BulkReq from "@/views/Bulk/BulkReq";
import BulkWithoutApprove from "@/views/Bulk/BulkWithoutApprove";
import Event from "@/views/Event";
import Product from "@/views/Product";
// Account
import Login from "@/views/Account/Login";
import Register from "@/views/Account/Register";
import ChangePassword from "@/views/Account/ChangePassword";

import Success from "@/views/Success";
import Admin from "@/views/Admin";
import School from "@/views/School";
import SchoolPwChanger from "@/views/SchoolPwChanger";

//Voucher
import VoucherBulk from "@/views/Voucher/Bulk.vue";
import VoucherBulkWithoutApprove from "@/views/Voucher/BulkWithoutApprove.vue";
import PublishLog from "@/views/Voucher/log_publish.vue";
import VoucherRequest from "@/views/Voucher/BulkReq.vue";
import Notice from "@/views/Notice.vue";

import Contract from "@/views/Contract/Contract.vue";

Vue.use(VueRouter);

const voucherRoutes = [
  {
    path: "/voucher/bulk",
    name: "VoucherBulk",
    component: VoucherBulk,
  },
  {
    path: "/voucher/bulk/noapprove",
    name: "VoucherBulkWithoutApprove",
    component: VoucherBulkWithoutApprove,
  },
  {
    path: "/voucher/log/publish",
    name: "PublishLog",
    component: PublishLog,
  },
  {
    path: "/voucher/log/request",
    name: "VoucherRequest",
    component: VoucherRequest,
  },
];

const routes = [
  ...voucherRoutes,
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/gift",
    name: "Gift",
    component: Gift,
  },
  {
    path: "/gift/bulk",
    name: "Bulk",
    component: Bulk,
  },
  {
    path: "/gift/bulk/lookup",
    name: "BulkReq",
    component: BulkReq,
  },
  {
    path: "/gift/bulk/noapprove",
    name: "BulkWithoutApprove",
    component: BulkWithoutApprove,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      hideNavigation: true,
    },
  },
  {
    path: "/change/pass",
    name: "ChangePassword",
    component: ChangePassword,
    meta: {
      hideNavigation: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      hideNavigation: true,
    },
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
    meta: {
      hideNavigation: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/school",
    name: "School",
    component: School,
  },
  {
    path: "/notice",
    name: "Notice",
    component: Notice,
  },
  {
    path: "/school/init/:token",
    name: "SchoolPwChanger",
    component: SchoolPwChanger,
    props: true,
    meta: {
      hideNavigation: true,
    },
  },
  {
    path: "/contract/:token",
    name: "ContractForm",
    component: Contract,
    props: true,
    meta: {
      hideNavigation: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
