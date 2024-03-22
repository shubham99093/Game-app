import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "01f91ced8fe14ccdac6f460abf3b88d9",
    },
});
