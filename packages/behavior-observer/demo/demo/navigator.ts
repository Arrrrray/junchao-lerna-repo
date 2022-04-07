// header数据结构设计
// 一级导航
const mainNavigatorList = [
    {
        id: 1,
        title: '产品',
        href: '',
        language: {
            cn: '产品',
            en: 'Product',
            th: 'ผลิตภัณฑ์',
            tw: '產品',
            jp: '製品',
            kr: '제품',
        },
        hasChildren: true,
    },
    {
        id: 2,
        title: '解决方案',
        href: '',
        language: {
            cn: '解决方案',
            en: '解决方案',
            th: '解决方案',
            tw: '解决方案',
            jp: '解决方案',
            kr: '解决方案',
        },
        hasChildren: true,
    },
    {
        id: 3,
        title: '资源与动态',
        href: '',
        language: {
            cn: '资源与动态',
            en: '资源与动态',
            th: '资源与动态',
            tw: '资源与动态',
            jp: '资源与动态',
            kr: '资源与动态',
        },
        hasChildren: true,
    },
    {
        id: 4,
        title: '定价',
        href: 'https://www.umu.cn/plan/',
        language: {
            cn: '定价',
            en: '定价',
            th: '定价',
            tw: '定价',
            jp: '定价',
            kr: '定价',
        },
        hasChildren: true,
    },
];

// 二级导航
const subNavigatorList = [
    {
        id: 1,
        parentId: 1,
        title: '教学工具',
        description: '让教学设计如搭积木一样有趣',
        iconSrc: {
            cn: '/static/img/home/home-product-1.png',
            en: '/static/img/home/home-product-1.png',
            tw: '/static/img/home/home-product-1.png',
            co: '/static/img/home/home-product-1.png',
        },
        href: 'https://www.umu.cn/pubduct/',
        language: {
            cn: {
                title: '教学工具',
                description: '让教学设计如搭积木一样有趣',
            },
            en: {
                title: '教学工具',
                description: '让教学设计如搭积木一样有趣',
            },
            th: {
                title: '教学工具',
                description: '让教学设计如搭积木一样有趣',
            },
            tw: {
                title: '教学工具',
                description: '让教学设计如搭积木一样有趣',
            },
            jp: {
                title: '教学工具',
                description: '让教学设计如搭积木一样有趣',
            },
            kr: {
                title: '教学工具',
                description: '让教学设计如搭积木一样有趣',
            },
        },
    },
];

// UMU AI
const AISubNavigatorList = {
    id: 1,
    title: 'UMU AI',
    language: {
        cn: 'UMU AI',
        en: 'UMU AI',
        th: 'UMU AI',
        tw: 'UMU AI',
        jp: 'UMU AI',
        kr: 'UMU AI',
    },
    children: [
        {
            id: 1,
            title: 'UMU AI 作业',
            description: '练习、反馈、提升、6大维度，实时、个性化反馈，在刻意练习中实现学以致用',
            iconSrc: {
                cn: '/static/img/home/home-product-1.png',
                en: '/static/img/home/home-product-1.png',
                tw: '/static/img/home/home-product-1.png',
                co: '/static/img/home/home-product-1.png',
            },
            href: 'https://www.umu.cn/pubduct/',
            language: {
                cn: {
                    title: 'UMU AI 作业',
                    description: '练习、反馈、提升、6大维度，实时、个性化反馈，在刻意练习中实现学以致用',
                },
                en: {
                    title: 'UMU AI 作业',
                    description: '练习、反馈、提升、6大维度，实时、个性化反馈，在刻意练习中实现学以致用',
                },
                th: {
                    title: 'UMU AI 作业',
                    description: '练习、反馈、提升、6大维度，实时、个性化反馈，在刻意练习中实现学以致用',
                },
                tw: {
                    title: 'UMU AI 作业',
                    description: '练习、反馈、提升、6大维度，实时、个性化反馈，在刻意练习中实现学以致用',
                },
                jp: {
                    title: 'UMU AI 作业',
                    description: '练习、反馈、提升、6大维度，实时、个性化反馈，在刻意练习中实现学以致用',
                },
                kr: {
                    title: 'UMU AI 作业',
                    description: '练习、反馈、提升、6大维度，实时、个性化反馈，在刻意练习中实现学以致用',
                },
            },
        }
    ]
}

// footer数据结构设计
// 一级导航
const mainFooterList = [
    {
        id: 1,
        title: '产品',
        href: '',
        language: {
            cn: '产品',
            en: 'Product',
            th: 'ผลิตภัณฑ์',
            tw: '產品',
            jp: '製品',
            kr: '제품',
        },
        hasChildren: true,
    },
    {
        id: 2,
        title: '解决方案',
        href: '',
        language: {
            cn: '解决方案',
            en: '解决方案',
            th: '解决方案',
            tw: '解决方案',
            jp: '解决方案',
            kr: '解决方案',
        },
        hasChildren: true,
    },
    {
        id: 3,
        title: '资源',
        href: '',
        language: {
            cn: '资源',
            en: '资源',
            th: '资源',
            tw: '资源',
            jp: '资源',
            kr: '资源',
        },
        hasChildren: true,
    },
    {
        id: 4,
        title: 'UMU',
        href: '',
        language: {
            cn: 'UMU',
            en: 'UMU',
            th: 'UMU',
            tw: 'UMU',
            jp: 'UMU',
            kr: 'UMU',
        },
        hasChildren: true,
    },
];
// 二级导航
const subFooterList = [
    {
        id: 1,
        parentId: 1,
        title: '教学工具',
        href: 'https://www.umu.cn/pubduct/learning',
        language: {
            cn: '教学工具',
            en: '教学工具',
            th: '教学工具',
            tw: '教学工具',
            jp: '教学工具',
            kr: '教学工具',
        },
    },
    {
        id: 2,
        parentId: 1,
        title: '互动直播',
        href: 'https://www.umu.cn/pubduct/live',
        language: {
            cn: '互动直播',
            en: '互动直播',
            th: '互动直播',
            tw: '互动直播',
            jp: '互动直播',
            kr: '互动直播',
        },
    },
    {
        id: 3,
        parentId: 1,
        title: '现场互动',
        href: 'https://www.umu.cn/pubduct/event',
        language: {
            cn: '现场互动',
            en: '现场互动',
            th: '现场互动',
            tw: '现场互动',
            jp: '现场互动',
            kr: '现场互动',
        },
    },
];















