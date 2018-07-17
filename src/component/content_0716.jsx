import * as React from "react";
import {MyTable} from "./myTable";
import {Vip} from "./vip_0716";


const page_url = 'https://www.clubmed.com.cn/o/%E5%86%AC%E5%AD%A3%E5%81%87%E6%9C%9F%E6%97%A9%E9%B8%9F%E8%AE%A1%E5%88%92';
let btn_bottom = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 270
    },
    src: 'images/btn_last.jpg',
    href: page_url
};

let keyView = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    href: page_url,
    src: 'images/key_view.jpg'
};

let emptyTable = {
    type: 'space',
    style: {height:  30}
};
let emptyMedium = {
    type: 'space',
    style: {height:  20}
};
let emptyMin = {
    type: 'space',
    style: {height:  10}
};

let bar_top = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    src: 'images/bar_top.jpg'
}

let bar_middle = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 765
    },
    src: 'images/bar_middle.jpg'
}

let bar_bottom = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 765
    },
    src: 'images/bar_bottom.jpg'
}

let content_top = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 428
    },
    src: 'images/content_top.jpg',
    href: page_url
}

let poster_top = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/poster_top.jpg',
    href: page_url
}

let tomamu = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/tomamu.jpg',
    href: 'https://www.clubmed.com.cn/r/%E5%8C%97%E6%B5%B7%E9%81%93Tomamu/w'
}
let poster_middle = {
    type: 'imgs',
    style: [{
            height: 'auto',
            width: 370,
        }, {
            height: 'auto',
            width: 370,
        }
    ],
    src: ['images/beidahu.jpg', 'images/yabuli.jpg'],
    href: [
        'https://www.clubmed.com.cn/r/%E5%8C%97%E5%A4%A7%E5%A3%B6/y',
        'https://www.clubmed.com.cn/r/%E9%BB%91%E9%BE%99%E6%B1%9F%C2%B7%E4%BA%9A%E5%B8%83%E5%8A%9B/s'
    ]
}

let poster_bottom = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/poster_bottom.jpg',
    href: 'https://www.clubmed.com.cn/r/%E4%B8%89%E4%BA%9A/y'
}
let book_btn = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 160
    },
    src: 'images/btn_book.jpg',
    href: page_url
}

let textBottom = {
    type: 'text',
    style: {
        width: 700,
        margin: 0,
        padding: 0,
        textAlign: 'left',
        color: '#3e3a39',
        fontSize: 16,
        fontWeight: 'bold'
    },
    content: `
        去年全新建成的Club Med Tomamu度假村因其优质的雪质和周边丰富的活动受到了滑雪迷们的热捧，早在开业前几个月就已一房难求。驰骋在层层粉雪之上，是前往特色餐厅享用日式烧肉配清酒或绿茶，或在日本最大的室内人造海滩悦享雪后的温暖……这些都是您不可错过的体验！
    `
};

let textTop = {
    type: 'text',
    style: {
        width: 700,
        margin: 0,
        padding: 0,
        textAlign: 'left',
        color: '#3e3a39',
        fontSize: 16,
        fontWeight: 'bold'
    },
    content: `
        Club Med作为世界度假领先品牌，一直致力于为客人提供更优质的服务和寻找世界度假胜地。
        看一看选择Club Med阳光度假村的六大理由：
    `
}; 

export const Content = () => {
    return (
        <table width="800" border="0" cellpadding="0" cellspacing="0" align="center">
            <tbody>
                <MyTable data={keyView}/>
                <MyTable data={emptyTable}/>
                <Vip/>
                <MyTable data={emptyTable}/>
                <MyTable data={content_top}/>
                <MyTable data={emptyTable}/>
                <MyTable data={book_btn} />
                <MyTable data={emptyTable}/>

                <MyTable data={bar_top}/>
                <MyTable data={emptyMedium}/>
                <MyTable data={textTop}/>
                <MyTable data={emptyMin}/>
                <MyTable data={poster_top}/>
                <MyTable data={emptyTable}/>

                <MyTable data={bar_middle}/>
                <MyTable data={emptyMedium}/>
                <MyTable data={textBottom}/>
                <MyTable data={emptyMin}/>
                <MyTable data={tomamu}/>
                <MyTable data={emptyTable}/>
                <MyTable data={poster_middle}/>
                <MyTable data={emptyTable}/>

                <MyTable data={bar_bottom}/>
                <MyTable data={emptyTable}/>
                <MyTable data={poster_bottom}/>
                <MyTable data={emptyTable}/>
                <MyTable data={btn_bottom} />
                <MyTable data={emptyTable}/>
                <MyTable data={emptyTable}/>
            </tbody>
        </table>
    );
};