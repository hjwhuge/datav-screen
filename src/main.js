import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import datavComponent from "datav-libs-dev";
import countTo from "vue3-count-to";

createApp(App).use(datavComponent).use(countTo).mount("#app");
