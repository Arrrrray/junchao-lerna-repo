// 首屏
const firstPage = {
    id: 1,
    type: 'first-page',
    title: "AI驱动、效果导向的企业学习平台",
    description: "告别灌输式学习，UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
    imgSrc: {
        cn: "${host1}/static/img/home/home-banner.png",
        en: "/static/img/home/home-banner.png",
        tw: "/static/img/home/home-banner.png",
        co: "/static/img/home/home-banner.png",
    },
    language: {
        cn: {
            title: "AI驱动、效果导向的企业学习平台",
            description: "告别灌输式学习，UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
        en: {
            title: "AI驱动、效果导向的企业学习平台",
            description: "告别灌输式学习，UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
        th: {
            title: "AI驱动、效果导向的企业学习平台",
            description: "告别灌输式学习，UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
    },
    buttonContent: {
        id: 1,
        type: "button",
        style: "left",
        children: [
            {
                id: 1,
                title: "免费试用",
                style: 'primary',
                href: "/signup",
                language: {
                    cn: "免费试用",
                    en: "免费试用",
                    th: "免费试用",
                    tw: "免费试用",
                    jp: "免费试用",
                    kr: "免费试用",
                }
            },
            {
                id: 2,
                title: "预约演示",
                style: 'default',
                href: "/signup",
                language: {
                    cn: "预约演示",
                    en: "预约演示",
                    th: "预约演示",
                    tw: "预约演示",
                    jp: "预约演示",
                    kr: "预约演示",
                }
            },
        ],
    }
};

// 客户墙
const customerWall = {
    id: 1,
    type: 'customer-wall',
    children: [
        {
            id: 1,
            imgSrc: {
                cn: "/static/img/home/home-customer-1.png",
                en: "/static/img/home/home-customer-1.png",
                tw: "/static/img/home/home-customer-1.png",
                co: "/static/img/home/home-customer-1.png",
            },
            with: "200px",
        },
        {
            id: 2,
            imgSrc: {
                cn: "/static/img/home/home-customer-1.png",
                en: "/static/img/home/home-customer-1.png",
                tw: "/static/img/home/home-customer-1.png",
                co: "/static/img/home/home-customer-1.png",
            },
            with: "200px",
        },
        {
            id: 3,
            imgSrc: {
                cn: "/static/img/home/home-customer-1.png",
                en: "/static/img/home/home-customer-1.png",
                tw: "/static/img/home/home-customer-1.png",
                co: "/static/img/home/home-customer-1.png",
            },
            with: "200px",
        },
        {
            id: 4,
            imgSrc: {
                cn: "/static/img/home/home-customer-1.png",
                en: "/static/img/home/home-customer-1.png",
                tw: "/static/img/home/home-customer-1.png",
                co: "/static/img/home/home-customer-1.png",
            },
            with: "200px",
        },
        {
            id: 5,
            imgSrc: {
                cn: "/static/img/home/home-customer-1.png",
                en: "/static/img/home/home-customer-1.png",
                tw: "/static/img/home/home-customer-1.png",
                co: "/static/img/home/home-customer-1.png",
            },
            with: "200px",
        },
        {
            id: 6,
            imgSrc: {
                cn: "/static/img/home/home-customer-1.png",
                en: "/static/img/home/home-customer-1.png",
                tw: "/static/img/home/home-customer-1.png",
                co: "/static/img/home/home-customer-1.png",
            },
            with: "200px",
        },
    ]
};

// 视频
const video = {
    id: 1,
    type: 'video',
    src: {
        cn: "/static/img/home/home-customer-1.mp4",
        en: "/static/img/home/home-customer-1.mp4",
        tw: "/static/img/home/home-customer-1.mp4",
        co: "/static/img/home/home-customer-1.mp4",
    },
    poster: {
        cn: "/static/img/home/home-customer-1.png",
        en: "/static/img/home/home-customer-1.png",
        tw: "/static/img/home/home-customer-1.png",
        co: "/static/img/home/home-customer-1.png",
    },
    with: "100%",
    autoPlay: true,
    showController: true,
    playInFullScreen: true,
}

// 产品介绍
const productDescription = {
    id: 1,
    type: 'product-description',
    title: "有效果的教学工具",
    href: "/signup",
    description: "UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
    iconSrc: {
        cn: "/static/img/home/home-customer-1.png",
        en: "/static/img/home/home-customer-1.png",
        tw: "/static/img/home/home-customer-1.png",
        co: "/static/img/home/home-customer-1.png",
    },
    language: {
        cn: {
            title: "有效果的教学工具",
            description: "UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
        en: {
            title: "有效果的教学工具",
            description: "UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
        tw: {
            title: "有效果的教学工具",
            description: "UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
        jp: {
            title: "有效果的教学工具",
            description: "UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
        th: {
            title: "有效果的教学工具",
            description: "UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
        kr: {
            title: "有效果的教学工具",
            description: "UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
    },
};

// 按钮
const buttonContent = {
    id: 1,
    type: "button",
    style: "left",
    children: [
        {
            title: "免费试用",
            style: 'primary',
            href: '#',
            language: {
                cn: "免费试用",
                en: "免费试用",
                th: "免费试用",
                tw: "免费试用",
                jp: "免费试用",
                kr: "免费试用",
            }
        },
        {
            title: "预约演示",
            style: 'default',
            href: '#',
            language: {
                cn: "预约演示",
                en: "预约演示",
                th: "预约演示",
                tw: "预约演示",
                jp: "预约演示",
                kr: "预约演示",
            }
        },
    ],
};

// 功能介绍
const productDescriptionCard = {
    id: 1,
    type: 'product-description-card',
    style: 'left',
    title: "AI驱动、效果导向的企业学习平台",
    description: "告别灌输式学习，UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
    imgSrc: {
        cn: "/static/img/home/home-banner.png",
        en: "/static/img/home/home-banner.png",
        tw: "/static/img/home/home-banner.png",
        co: "/static/img/home/home-banner.png",
    },
    language: {
        cn: {
            title: "AI驱动、效果导向的企业学习平台",
            description: "告别灌输式学习，UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
        en: {
            title: "AI驱动、效果导向的企业学习平台",
            description: "告别灌输式学习，UMU 用 AI 技术结合企业学习场景，让企业学习指向能力与绩效提升",
        },
    },
    navContent: {
        id: 1,
        type: 'nav-content',
        style: "left",
        children: [
            {
                id: 1,
                title: "免费试用",
                style: 'primary',
                href: "/signup",
                isActive: true,
                language: {
                    cn: "免费试用",
                    en: "免费试用",
                    th: "免费试用",
                    tw: "免费试用",
                    jp: "免费试用",
                    kr: "免费试用",
                }
            },
            {
                id: 2,
                title: "免费试用",
                style: 'primary',
                href: "/signup",
                isActive: true,
                language: {
                    cn: "免费试用",
                    en: "免费试用",
                    th: "免费试用",
                    tw: "免费试用",
                    jp: "免费试用",
                    kr: "免费试用",
                }
            },
        ],
    },
    buttonContent: {
        id: 1,
        type: "button",
        style: "left",
        children: [
            {
                id: 1,
                title: "免费试用",
                style: 'primary',
                href: "/signup",
                language: {
                    cn: "免费试用",
                    en: "免费试用",
                    th: "免费试用",
                    tw: "免费试用",
                    jp: "免费试用",
                    kr: "免费试用",
                }
            },
            {
                id: 2,
                title: "预约演示",
                style: 'default',
                href: "/signup",
                language: {
                    cn: "预约演示",
                    en: "预约演示",
                    th: "预约演示",
                    tw: "预约演示",
                    jp: "预约演示",
                    kr: "预约演示",
                }
            },
        ],
    }
};


// 文字输入
const textInputCard = {
    id: 1,
    type: 'text-input-card',
    style: 'left', // left, right, center
    fontSize: "32px",
    title: "覆盖企业学习培训全场景",
    lang: {
        cn: "覆盖企业学习培训全场景",
        en: "覆盖企业学习培训全场景",
        th: "覆盖企业学习培训全场景",
        tw: "覆盖企业学习培训全场景",
        jp: "覆盖企业学习培训全场景",
        kr: "覆盖企业学习培训全场景",
    }
}

// 解决方案
const solutionCard = {
    id: 1,
    type: 'solution-card',
    iconSrc: {
        cn: "/static/img/home/solution-icon-cn.png",
        en: "/static/img/home/solution-icon-en.png",
        tw: "/static/img/home/solution-icon-tw.png",
        co: "/static/img/home/solution-icon-co.png",
    },
    title: "解决方案",
    description: "解决企业学习培训的各种难题",
    href: "/solution",
    language: {
        cn: {
            title: "解决方案",
            description: "解决企业学习培训的各种难题",
        },
        en: {
            title: "解决方案",
            description: "解决企业学习培训的各种难题",
        },
        th: {
            title: "解决方案",
            description: "解决企业学习培训的各种难题",
        },
        tw: {
            title: "解决方案",
            description: "解决企业学习培训的各种难题",
        },
        jp: {
            title: "解决方案",
            description: "解决企业学习培训的各种难题",
        },
        kr: {
            title: "解决方案",
            description: "解决企业学习培训的各种难题",
        },
    }
}

// 客户背书
const CustomerEndorsementCard = {
    id: 1,
    type: "customer-endorsement-card",
    iconSrc:{
        cn: "/static/img/home/customer-endorsement-icon-cn.png",
        en: "/static/img/home/customer-endorsement-icon-en.png",
        tw: "/static/img/home/customer-endorsement-icon-tw.png",
        co: "/static/img/home/customer-endorsement-icon-co.png",
    },
    title: "“最初引入 UMU 是感性的选择，选择后却发现一直在理性的道路上奔驰。”——诺华制药 培训与发展总监 王星恒",
    href: "/customer-endorsement",
    learnMoreText: "了解更多客户故事",
    language: {
        cn: {
            title:"“最初引入 UMU 是感性的选择，选择后却发现一直在理性的道路上奔驰。”——诺华制药 培训与发展总监 王星恒",
            learnMoreText: "了解更多客户故事",
        },
        en: {
            title:"“最初引入 UMU 是感性的选择，选择后却发现一直在理性的道路上奔驰。”——诺华制药 培训与发展总监 王星恒",
            learnMoreText: "了解更多客户故事",
        },
        th: {
            title:"“最初引入 UMU 是感性的选择，选择后却发现一直在理性的道路上奔驰。”——诺华制药 培训与发展总监 王星恒",
            learnMoreText: "了解更多客户故事",
        },
        tw: {
            title:"“最初引入 UMU 是感性的选择，选择后却发现一直在理性的道路上奔驰。”——诺华制药 培训与发展总监 王星恒",
            learnMoreText: "了解更多客户故事",
        },
        jp: {
            title:"“最初引入 UMU 是感性的选择，选择后却发现一直在理性的道路上奔驰。”——诺华制药 培训与发展总监 王星恒",
            learnMoreText: "了解更多客户故事",
        },
        kr: {
            title:"“最初引入 UMU 是感性的选择，选择后却发现一直在理性的道路上奔驰。”——诺华制药 培训与发展总监 王星恒",
            learnMoreText: "了解更多客户故事",
        },
    },

}





