(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/data/slides.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slides",
    ()=>slides
]);
const slides = [
    {
        src: "/images/city.jpg",
        title: "Discover the Maldives",
        description: "Experience crystal-clear waters and white sandy beaches.",
        blogLink: "https://yourblog.com/maldives",
        bookingLink: "https://yourwebsite.com/search?destination=maldives"
    },
    {
        src: "/images/mountain.jpg",
        title: "Explore Sigiriya Rock Fortress",
        description: "An ancient wonder rising above the lush green forests of Sri Lanka.",
        blogLink: "https://yourblog.com/sigiriya",
        bookingLink: "https://yourwebsite.com/search?destination=sigiriya"
    },
    {
        src: "/images/beach.jpg",
        title: "Romantic Paris",
        description: "Enjoy the art, the cuisine, and the city of love.",
        blogLink: "https://yourblog.com/paris",
        bookingLink: "https://yourwebsite.com/search?destination=paris"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/HeroSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/slides.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSlider() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fadeTitle, setFadeTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fadeDesc, setFadeDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fadeButtons, setFadeButtons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const length = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].length;
    // Functions
    const staggerFadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[staggerFadeIn]": ()=>{
            setTimeout({
                "HeroSlider.useCallback[staggerFadeIn]": ()=>setFadeTitle(true)
            }["HeroSlider.useCallback[staggerFadeIn]"], 50);
            setTimeout({
                "HeroSlider.useCallback[staggerFadeIn]": ()=>setFadeDesc(true)
            }["HeroSlider.useCallback[staggerFadeIn]"], 200);
            setTimeout({
                "HeroSlider.useCallback[staggerFadeIn]": ()=>setFadeButtons(true)
            }["HeroSlider.useCallback[staggerFadeIn]"], 350);
        }
    }["HeroSlider.useCallback[staggerFadeIn]"], []);
    const fadeOutElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[fadeOutElements]": (callback)=>{
            setFadeTitle(false);
            setFadeDesc(false);
            setFadeButtons(false);
            setTimeout({
                "HeroSlider.useCallback[fadeOutElements]": ()=>{
                    callback();
                    staggerFadeIn();
                }
            }["HeroSlider.useCallback[fadeOutElements]"], 300);
        }
    }["HeroSlider.useCallback[fadeOutElements]"], [
        staggerFadeIn
    ]);
    const handleNextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[handleNextSlide]": ()=>{
            fadeOutElements({
                "HeroSlider.useCallback[handleNextSlide]": ()=>setCurrent({
                        "HeroSlider.useCallback[handleNextSlide]": (prev)=>(prev + 1) % length
                    }["HeroSlider.useCallback[handleNextSlide]"])
            }["HeroSlider.useCallback[handleNextSlide]"]);
        }
    }["HeroSlider.useCallback[handleNextSlide]"], [
        fadeOutElements,
        length
    ]);
    const handlePrevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[handlePrevSlide]": ()=>{
            fadeOutElements({
                "HeroSlider.useCallback[handlePrevSlide]": ()=>setCurrent({
                        "HeroSlider.useCallback[handlePrevSlide]": (prev)=>(prev - 1 + length) % length
                    }["HeroSlider.useCallback[handlePrevSlide]"])
            }["HeroSlider.useCallback[handlePrevSlide]"]);
        }
    }["HeroSlider.useCallback[handlePrevSlide]"], [
        fadeOutElements,
        length
    ]);
    // Auto-rotation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSlider.useEffect": ()=>{
            const timer = setInterval(handleNextSlide, 5000);
            return ({
                "HeroSlider.useEffect": ()=>clearInterval(timer)
            })["HeroSlider.useEffect"];
        }
    }["HeroSlider.useEffect"], [
        handleNextSlide
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[90vh] overflow-hidden",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.src,
                            alt: slide.title,
                            fill: true,
                            className: "object-cover pointer-events-none",
                            priority: index === 0
                        }, void 0, false, {
                            fileName: "[project]/app/components/HeroSlider.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6 pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 transform transition-all duration-700 ${fadeTitle && index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSlider.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `max-w-2xl text-lg text-gray-200 drop-shadow-md mb-6 transform transition-all duration-700 ${fadeDesc && index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                                    children: slide.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSlider.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col sm:flex-row gap-4 transform transition-all duration-700 ${fadeButtons && index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: slide.blogLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-100 transition transform hover:-translate-y-1 hover:scale-105 duration-300",
                                            children: "Read About This Destination"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HeroSlider.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: slide.bookingLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 transition transform hover:-translate-y-1 hover:scale-105 duration-300",
                                            children: "Book a Tour"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HeroSlider.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/HeroSlider.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/HeroSlider.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/app/components/HeroSlider.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePrevSlide,
                className: "absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full z-10 cursor-pointer",
                children: "❮"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSlider.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNextSlide,
                className: "absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full z-10 cursor-pointer",
                children: "❯"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSlider.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>fadeOutElements(()=>setCurrent(index)),
                        className: `w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"}`
                    }, index, false, {
                        fileName: "[project]/app/components/HeroSlider.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSlider.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HeroSlider.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(HeroSlider, "htKCI2zc13+HI4h/1gGADTiqFrg=");
_c = HeroSlider;
var _c;
__turbopack_context__.k.register(_c, "HeroSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_676c5ee1._.js.map