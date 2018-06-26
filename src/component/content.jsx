import * as React from "react";
import {MyTable} from "./MyTable";
import {Vip} from "./Vip";
/*
    0625-Kani+IZ
*/
let link1 = 'https://www.clubmed.com.cn/r/%E5%8D%A1%E5%B0%BC%E5%B2%9B/y';
let link2 = 'https://www.clubmed.com.cn/I/IZ_6destinations_page';

let keyView = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    src: 'images/key_view.jpg',
    href: link1
};
let bar1View = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    src: 'images/bar_1st.jpg'
};
let content1View = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    src: 'images/content_1st.jpg',
    href: link1
};

let content2View = {
    type: 'img',
    style: [{
            height: 'auto',
            width: 372
        }, {
            height: 'auto',
            width: 372
        }
    ],
    src: ['images/content_2nd_left.jpg', 'images/content_2nd_right.jpg'],
    href: [link1, link1]
};

let bookBtnView = {
    type: 'img',
    style: {
        height: 'auto',
        width: 159
    },
    src: 'images/btn_book.jpg',
    href: link1
};

let bar2ndView = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    src: 'images/bar_2nd.jpg'
};

let contentLastView = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    src: 'images/content_last.jpg',
    href: link2
};

let bookLastView = {
    type: 'img',
    style: {
        height: 'auto',
        width: 183
    },
    src: 'images/btn_last.jpg',
    href: link2
};


let instructionView = {
    type: 'text',
    outterStyle: {
        verticalAlign: 'top',
        textAlign: 'center',
        height: 'auto',
        background: 'url(images/instruction.jpg) no-repeat center center',
        width: 520,
        height: 200,
    },
    style: {
        fontSize: 24,
        width: 520,
        height: 168,
        textAlign: 'center',
        fontWeight: 'bolder',
        color: '#005589'
    },
    content: `
        优惠代码：KIDX50
    `
};

let textVipView = {
    type: 'text',
    outterStyle: {
        width: 680,
        height: 150,
    },
    style: {
        width: 680,
        height: 150,
        fontSize: 16,
        lineHeight: '28px'
    },
    content: `
        亲爱的<%@ include view='FirstNameGC' %>：<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要在全世界选一个最适合情侣度假的地方，很多人会毫不犹豫地说—— <span style="font-weight:bolder;color:#005589;">马尔代夫</span>！<br/>
        而在Club Med<span style="font-weight:bolder;color:#005589;">卡尼岛</span>度假村，马尔代夫已经不再只是情侣的代名词，<span style="font-weight:bolder;color:#005589;">全新</span>的欢乐儿童角与四间主题活动教室；<span style="font-weight:bolder;color:#005589;">全新</span>的潜水中心；<span style="font-weight:bolder;color:#005589;">全新</span>升级设施的水上套房满足您与宝贝一通尽享美妙体验。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了感谢您的支持，即日起至7月31日预订卡尼岛度假村，<span style="font-size:21px;font-weight:bolder;color:#99d7e3;">4-11岁儿童立享半价</span>！
    `
};

let emptyTable = {
    type: 'space',
    style: {height:  30}
};

let emptyBig = {
    type: 'space',
    style: {height:  56}
};

// <Vip/>
// <MyTable data={textVipView}/>
export const Content = () => {
    return (
        <table width="800" border="0" cellpadding="0" cellspacing="0" align="center">
            <tbody>
                <MyTable data={keyView}/>
                <MyTable data={emptyTable}/>

                <MyTable data={textVipView}/>

                <MyTable data={emptyTable}/>
                <MyTable data={instructionView}/>
                <MyTable data={emptyTable}/>

                <MyTable data={bar1View}/>
                <MyTable data={content1View}/>
                <MyTable data={emptyTable}/>
                <MyTable data={content2View}/>
                <MyTable data={emptyTable}/>
                <MyTable data={bookBtnView}/>
                <MyTable data={emptyTable}/>
                <MyTable data={bar2ndView}/>
                <MyTable data={emptyTable}/>
                <MyTable data={contentLastView}/>
                <MyTable data={emptyBig}/>
                <MyTable data={bookLastView}/>
            </tbody>
        </table>
    );
};