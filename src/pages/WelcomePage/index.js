import { createTemplate, createPage } from "@aacgn/atomic";

import "./index.css";

import DynamicMessage from "@components/DynamicMessage";

const WelcomePage = () => createPage(
    {
        name: "welcome",
        context: {},
        mount: function(){
            return createTemplate({
                tag: "div",
                attr: {},
                props: {
                    children: [    
                        DynamicMessage(`Welcome, this is your atomic boiler template!`)
                    ]
                }
            })
        },
        onMount: function(ref) {
            console.log('hello!');
        },
        onUnmount: function(ref) {
            console.log('bye!');
        }
    }
);

export default WelcomePage;