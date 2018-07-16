import * as React from "react";
import {MyTable} from "./MyTable";
import {Vip} from "./Vip";
/*
    0625-Kani+IZ
*/

/*
// couple
let keyView = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    href: 'https://www.clubmed.com.cn/r/%E5%8D%A1%E5%B0%BC%E5%B2%9B/y',
    src: 'images/key_view.jpg'
};

let emptyTable = {
    type: 'space',
    style: {height:  30}
};

let emptyBig = {
    type: 'space',
    style: {height:  56}
};
let bar1 = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    src: 'images/bar_middle.jpg'
}
let content_top = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/content_top.jpg',
    href: 'https://www.clubmed.com.cn/r/%E7%8F%8D%E6%8B%89%E4%B8%81%E6%B9%BE/y'
}
let content_middle = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/content_middle.jpg',
    href: 'https://www.clubmed.com.cn/r/%E9%BB%91%E9%BE%99%E6%B1%9F%C2%B7%E4%BA%9A%E5%B8%83%E5%8A%9B/s'
}
let content_bottom = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/content_bottom.jpg',
    href: 'https://www.clubmed.com.cn/r/%E4%B8%89%E4%BA%9A/y'
}
*/
let btn_bottom = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 216
    },
    src: 'images/btn_last.jpg',
    href: 'https://www.clubmed.com.cn/r/%E5%8D%A1%E5%B0%BC%E5%B2%9B/y'
}

// member
let keyView = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    href: 'https://www.clubmed.com.cn/r/%E5%8D%A1%E5%B0%BC%E5%B2%9B/y',
    src: 'images/key_view.jpg'
};

let emptyTable = {
    type: 'space',
    style: {height:  30}
};

let bar1 = {
    type: 'img',
    style: {
        height: 'auto',
        width: 760
    },
    src: 'images/bar_middle_mem.jpg'
}
let content_top = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/content_mem_top.jpg',
    href: 'https://www.clubmed.com.cn/r/%E7%8F%8D%E6%8B%89%E4%B8%81%E6%B9%BE/y'
}
let content_middle = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/content_mem_middle.jpg',
    href: 'https://www.clubmed.com.cn/r/%E6%B0%91%E4%B8%B9%E5%B2%9B/y'
}
let content_bottom = {
    type: 'img',
    style: {
        height: 'auto',
        display: 'block',
        width: 760
    },
    src: 'images/content_mem_bottom.jpg',
    href: 'https://www.clubmed.com.cn/r/%E4%B8%89%E4%BA%9A/y'
}

// <Vip/>
// <MyTable data={textVipView}/>
export const Content = () => {
    return (
        <table width="800" border="0" cellpadding="0" cellspacing="0" align="center">
            <tbody>
                <MyTable data={keyView}/>
                <MyTable data={emptyTable}/>
                <Vip/>
                <MyTable data={emptyTable}/>
                <MyTable data={bar1}/>
                <MyTable data={emptyTable}/>
                <MyTable data={content_top}/>
                <MyTable data={emptyTable}/>
                <MyTable data={content_middle}/>
                <MyTable data={emptyTable}/>
                <MyTable data={content_bottom}/>
                <MyTable data={emptyTable}/>
                <MyTable data={btn_bottom} />
            </tbody>
        </table>
    );
};