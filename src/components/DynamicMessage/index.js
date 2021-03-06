import { createOrganism } from "@aacgn/atomic";

import "./index.css";

const DynamicMessage = (msg) => createOrganism({
    tag: "span",
    attr: {},
    props: {
        textContent: msg
    }
});

export default DynamicMessage;