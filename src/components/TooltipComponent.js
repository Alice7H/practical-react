import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const ColoredTooltip = () => {
    return <span style={{color: 'yellow'}}>Colored Component</span>
}

const CustomChild = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div>First line</div>
            <div>Second line</div>
        </div>
    )
})

export default function TooltipComponent() {
    return (
        <div>
            <div style={{ paddingBottom: "20px" }}>
                <Tippy placement="right" arrow={false} delay={1000} content="Basic tooltip">
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ paddingBottom: "20px" }}>
                <Tippy content={ <span style={{color: 'orange'}}>Colored</span>}>
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ paddingBottom: "20px" }}>
                <Tippy content={<ColoredTooltip/>}>
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ paddingBottom: "20px" }}>
                <Tippy placement="top-start" content={<ColoredTooltip/>}>
                   <CustomChild></CustomChild>
                </Tippy>
            </div>
        </div>
    );
}
