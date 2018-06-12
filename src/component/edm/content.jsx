import * as React from "react";
import {MyTable} from "./MyTable";
let emptyTable = {h: 30, type: 'space'};
let imgTable = {
    type: 'img',
    style: {
        height: 200,
        width: 200,
    },
    src: 'http://ipcmm.baidu.com/media/v1/0f000KgiXVhGs73zMJ-Uds.jpg'
};
let textTable = {
    type: 'text',
    style: {
        height: 100,
        width: 400,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        color: '#ddd',
        fontSize: 14,
        fontWeight: 'bold'
    },
    content: `
        Club Med为您带来多个端午小长假阳光海岛目的地限时优惠!
        即日起至2018年5月25日,预订指定度假村相应出行日期并输入优惠代码 每成人每单即可立减700元！
        带着一颗愉快的心情,带着家人、朋友、爱人前往阳光沙滩度假村享受
        完美、充满阳光的假期吧！
    `
};
export const Content = () => {
    return (
        <table width="800" border="0" cellpadding="0" cellspacing="0" align="center">
            <tbody>
                <MyTable data={emptyTable}/>
                <MyTable data={imgTable}/>
                <MyTable data={emptyTable}/>
                <MyTable data={textTable}/>
            </tbody>
        </table>
    );
};