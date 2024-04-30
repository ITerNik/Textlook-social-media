import Tippy from "@tippyjs/react";
import 'tippy.js/animations/scale.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/animations/shift-toward.css'
import 'tippy.js/animations/perspective-subtle.css'
import {followCursor} from 'tippy.js'
import {ReactElement, ReactNode} from "react";

export function TipButton({children, tip} : {children: ReactElement, tip: ReactNode}) {
    return (
        <div className="flex h-full">
            <Tippy content={tip} followCursor="initial" plugins={[followCursor]} animation='perspective-subtle' duration={300}
            delay={[200, 0]} placement="bottom-start" className="text-center text-white font-light px-4 py-2 bg-slate-900/60 rounded-md">
                {children}
            </Tippy>
        </div>
    )
}