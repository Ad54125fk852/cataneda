"use strict";
exports.id = 9239;
exports.ids = [9239];
exports.modules = {

/***/ 2115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addParlx = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .capt .parlx")) {
            document.querySelector(".fixed-slider .capt .parlx").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
            document.querySelector(".fixed-slider .capt .parlx").style.opacity = 1 - scrolled / 600;
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addParlx);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @next/next/no-css-tags */ 

const DarkTheme = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/dark.css"
                })
            }),
            children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);


/***/ }),

/***/ 9239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _components_Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2532);
/* harmony import */ var _common_addParlx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2115);
/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8063);


/* eslint-disable @next/next/no-img-element */ 





const Demos = ()=>{
    const fixedHeader = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    const MainContent = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setInterval(()=>{
            if (fixedHeader.current) {
                var slidHeight = fixedHeader.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
    }, [
        fixedHeader,
        MainContent
    ]);
    const [pageLoaded, setPageLoaded] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
            }, 1000);
            (0,_common_addParlx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
            document.querySelector("body").style.backgroundColor = "#181b21";
        }
    }, [
        pageLoaded
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "a436861996252f10",
                children: ".masonery.jsx-a436861996252f10 .item-img.jsx-a436861996252f10 {position:relative;\noverflow:hidden}\n.masonery.jsx-a436861996252f10 .gallery.jsx-a436861996252f10 .items.jsx-a436861996252f10 {padding:0 40px;\nmargin-top:80px;\ntext-align:center}\n.masonery.jsx-a436861996252f10 .gallery.jsx-a436861996252f10 .items.jsx-a436861996252f10 h6.jsx-a436861996252f10 {margin-top:25px;\nfont-size:17px;\nfont-weight:400;\nfont-family:\"Barlow Condensed\", sans-serif;\ntext-align:center;\ntext-transform:uppercase;\nletter-spacing:3px}\n.masonery.jsx-a436861996252f10 .gallery.jsx-a436861996252f10 .items.jsx-a436861996252f10 .item-img.jsx-a436861996252f10:hover img.jsx-a436861996252f10 {}\n.masonery.jsx-a436861996252f10 .item-img.jsx-a436861996252f10:hover .tlinks.jsx-a436861996252f10 {opacity:1}\n.masonery.jsx-a436861996252f10 .item-img.jsx-a436861996252f10 .tlinks.jsx-a436861996252f10 {position:absolute;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\n-webkit-transition:all 0.4s;\ntransition:all 0.4s;\nbackground:rgba(0, 0, 0, 0.5);\nopacity:0;\npadding:0 40px}\n.masonery.jsx-a436861996252f10 .item-img.jsx-a436861996252f10 .tlinks.jsx-a436861996252f10 a.jsx-a436861996252f10 {padding:14px 20px;\nborder-radius:5px;\nbackground:#32363e;\ncolor:#fff;\nfont-size:14px;\nfont-weight:500;\nmargin:5px 0}\n.masonery.jsx-a436861996252f10 .item-img.jsx-a436861996252f10 .tlinks.jsx-a436861996252f10 a.jsx-a436861996252f10:last-of-type {background:#75dab4;\ncolor:#181b21;\nmargin-left:5px}\n.masonery.jsx-a436861996252f10 .item-img.jsx-a436861996252f10 .new.jsx-a436861996252f10 {padding:10px 30px;\nbackground:#75dab4;\nposition:absolute;\ntop:0;\nleft:-60px;\nwidth:200px;\n-webkit-transform:rotate(-30deg);\n-moz-transform:rotate(-30deg);\n-ms-transform:rotate(-30deg);\ntransform:rotate(-30deg);\nfont-size:13px}"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                ref: fixedHeader,
                style: {
                    backgroundImage: "url(/img/demos/bg.png)"
                },
                "data-overlay-dark": "4",
                className: "jsx-a436861996252f10" + " " + "works-header fixed-slider hfixd valign bg-img",
                /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-a436861996252f10" + " " + "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-a436861996252f10" + " " + "row justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-a436861996252f10" + " " + "col-lg-9 col-md-11 static",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-a436861996252f10" + " " + "capt mt-50",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-a436861996252f10" + " " + "parlx",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-a436861996252f10" + " " + "custom-font",
                                                children: "Creative Showcase Portfolio"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-a436861996252f10",
                                                children: "Creative way to showcase your works at their absolute best."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-a436861996252f10" + " " + "bactxt custom-font valign",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "transparent"
                                            },
                                            className: "jsx-a436861996252f10" + " " + "full-width",
                                            children: "avo"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: MainContent,
                className: "jsx-a436861996252f10" + " " + "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-a436861996252f10" + " " + "masonery section-padding sub-bg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-a436861996252f10" + " " + "container-fluid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-a436861996252f10" + " " + "sec-head custom-font text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                "data-splitting": true,
                                                className: "jsx-a436861996252f10" + " " + "wow words chars splitting",
                                                children: "Home Pages."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-a436861996252f10" + " " + "tbg",
                                            children: "Home Pages"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-a436861996252f10" + " " + "row",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-a436861996252f10" + " " + "gallery full-width",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items graphic",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home1-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home1-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/1.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Main Demo"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items web",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home2-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home2-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/2.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Creative Studio"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home3-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home3-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/3.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Business Startup"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home4-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home4-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/4.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "One Page Demo"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home5-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/home/home5-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/5.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Freelancer"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/about/about-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/about/about-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/6.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "About Us"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/contact/contact-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/contact/contact-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/7.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/blog/blog-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/blog/blog-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/18.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Blogs"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/blog-details/blog-details-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/blog-details/blog-details-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/19.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Post Details"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    "data-wow-delay": ".4s",
                                                    className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/demos/more.png",
                                                        alt: "image",
                                                        className: "jsx-a436861996252f10"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        style: {
                            background: "#181b21"
                        },
                        className: "jsx-a436861996252f10" + " " + "masonery section-padding pb-70",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-a436861996252f10" + " " + "container-fluid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-a436861996252f10" + " " + "sec-head custom-font text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                "data-splitting": true,
                                                className: "jsx-a436861996252f10" + " " + "wow words chars splitting",
                                                children: "Portfolio."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-a436861996252f10" + " " + "tbg",
                                            children: "Portfolio Showcase"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-a436861996252f10" + " " + "row",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-a436861996252f10" + " " + "gallery full-width",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase/showcase-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase/showcase-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/12.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Full Screen"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase2/showcase2-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase2/showcase2-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/13.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Creative Carousel"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase5/showcase5-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase5/showcase5-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/17.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "new",
                                                                children: "New"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Creative Carousel 2"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase4/showcase4-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase4/showcase4-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/15.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Columns Slider"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase3/showcase3-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/showcase3/showcase3-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/14.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Radius Carousel"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/works/works-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/works/works-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/8.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Portfolio"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/works2/works2-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/works2/works2-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/9.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Masonry 3 Columns"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/works3/works3-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/works3/works3-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/10.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Masonry 2 Columns"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/works4/works4-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/works4/works4-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/11.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Pinterest List"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-a436861996252f10" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-a436861996252f10" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-a436861996252f10" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a436861996252f10" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/project-details2/project-details2-dark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                            href: "/project-details2/project-details2-light",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-a436861996252f10",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/demos/16.png",
                                                                alt: "image",
                                                                className: "jsx-a436861996252f10"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-a436861996252f10" + " " + "cont",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "jsx-a436861996252f10",
                                                            children: "Project Details"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "jsx-a436861996252f10" + " " + "footer-half sub-bg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-a436861996252f10" + " " + "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-a436861996252f10" + " " + "copyrights text-center mt-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "jsx-a436861996252f10",
                                    children: [
                                        "\xa9 2022, Avo Template. Made with passion by",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            className: "jsx-a436861996252f10",
                                            children: "ThemesCamp"
                                        }),
                                        "."
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demos);


/***/ })

};
;