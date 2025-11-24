module.exports = [
"[project]/app/data/destinations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "destinations",
    ()=>destinations
]);
const destinations = [
    {
        id: "1",
        cityName: "Kandy",
        image: "/images/destinations/kandy.jpg",
        description: "Nestled in Sri Lanka's central highlands, Kandy is a cultural gem known for the Temple of the Tooth, lush hills, and serene lake views. The city's colonial charm blends seamlessly with its vibrant Buddhist traditions, offering a deeply immersive experience of Sri Lanka's heritage.",
        author: "Admin",
        shortDescription: "A tropical paradise of beaches, temples, and rice terraces.",
        createdAt: "2025-10-15",
        updatedAt: "2025-10-30",
        tagline: "The cultural heart of Sri Lanka — where tradition meets tranquility.",
        highlights: [
            "Temple of the Sacred Tooth Relic",
            "Kandy Lake evening walks",
            "Peradeniya Botanical Gardens",
            "Esala Perahera Festival"
        ],
        rating: 4.8
    },
    {
        id: "2",
        cityName: "Galle",
        image: "/images/destinations/galle.jpeg",
        description: "A stunning coastal city with colonial Dutch architecture, charming cafes, and picturesque ocean views inside the historic Galle Fort. Galle offers a unique fusion of old-world charm and modern coastal relaxation — ideal for culture lovers and sunset chasers alike.",
        author: "Editor",
        shortDescription: "The city of lights — romance, art, and timeless beauty.",
        createdAt: "2025-10-18",
        tagline: "A living postcard of Sri Lanka’s southern coast.",
        highlights: [
            "Galle Dutch Fort and lighthouse",
            "Oceanfront cafes and boutiques",
            "Unawatuna Beach snorkeling",
            "Scenic coastal sunsets"
        ],
        rating: 4.7
    }
];
}),
"[project]/app/components/HeroSlider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$destinations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/destinations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function HeroSlider() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fadeTitle, setFadeTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fadeDesc, setFadeDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fadeButtons, setFadeButtons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const length = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$destinations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["destinations"].length;
    const staggerFadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTimeout(()=>setFadeTitle(true), 50);
        setTimeout(()=>setFadeDesc(true), 200);
        setTimeout(()=>setFadeButtons(true), 350);
        setZoom(true);
    }, []);
    const fadeOutElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((callback)=>{
        setFadeTitle(false);
        setFadeDesc(false);
        setFadeButtons(false);
        setZoom(false);
        setTimeout(()=>{
            callback();
            staggerFadeIn();
        }, 400);
    }, [
        staggerFadeIn
    ]);
    const handleNextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        fadeOutElements(()=>setCurrent((prev)=>(prev + 1) % length));
    }, [
        fadeOutElements,
        length
    ]);
    const handlePrevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        fadeOutElements(()=>setCurrent((prev)=>(prev - 1 + length) % length));
    }, [
        fadeOutElements,
        length
    ]);
    // Auto-rotation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(handleNextSlide, 6000);
        return ()=>clearInterval(timer);
    }, [
        handleNextSlide
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[90vh] overflow-hidden bg-black",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$destinations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["destinations"].map((dest, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: dest.image,
                            alt: dest.cityName,
                            fill: true,
                            priority: index === 0,
                            className: `object-cover transition-transform duration-[7000ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${zoom && index === current ? "scale-110" : "scale-100"}`
                        }, void 0, false, {
                            fileName: "[project]/app/components/HeroSlider.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex flex-col justify-center items-center text-center px-6",
                            children: [
                                dest.tagline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sky-400 uppercase tracking-widest text-sm md:text-base mb-2 transform transition-all duration-700 ${fadeTitle && index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                                    children: dest.tagline
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSlider.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl mb-4 transform transition-all duration-700 ${fadeTitle && index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                                    children: dest.cityName
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSlider.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `max-w-2xl text-lg text-gray-200 drop-shadow-md mb-8 leading-relaxed transform transition-all duration-700 ${fadeDesc && index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                                    children: dest.shortDescription
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSlider.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col sm:flex-row gap-4 transform transition-all duration-700 ${fadeButtons && index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push(`/destinations/${dest.id}`),
                                            className: "px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:scale-105 duration-300",
                                            children: "Read About This Destination"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HeroSlider.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push("/reservation"),
                                            className: "px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-700 transition transform hover:-translate-y-1 hover:scale-105 duration-300",
                                            children: "Book Now"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HeroSlider.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/HeroSlider.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/HeroSlider.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, dest.id, true, {
                    fileName: "[project]/app/components/HeroSlider.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePrevSlide,
                className: "absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-4 rounded-full z-10 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:scale-110",
                children: "❮"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSlider.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNextSlide,
                className: "absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-4 rounded-full z-10 cursor-pointer transition-all duration-300 backdrop-blur-sm hover:scale-110",
                children: "❯"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSlider.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$destinations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["destinations"].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>fadeOutElements(()=>setCurrent(index)),
                        className: `w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-white scale-125" : "bg-gray-400"}`
                    }, index, false, {
                        fileName: "[project]/app/components/HeroSlider.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSlider.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HeroSlider.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_08bf3cd9._.js.map