import * as React from "react";
import {track_code, header_title, logo_link} from './config';
const style1:any = {
    fontSize: 12,
    textAlign: 'center',
    margin: 0,
    padding: 0,
    color: '#6E6E6E',
};
const logoImg = 'images/asset/logo.jpg';


export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    getHtmlStr() {
        let msg = document.documentElement.outerHTML;
        msg = msg.replace(/&lt;/g, '<');
        msg = msg.replace(/&gt;/g, '>');
        msg = msg.replace(/&amp;/g, '&');
         // 添加 copy 内容
        document.addEventListener('copy',function copy (e) {
            msg = `${msg}`;
            e.clipboardData.setData('text/plain', msg);
            e.preventDefault();
        })
        // 执行 copy 命令
        document.execCommand('copy');
        // 移除绑定事件
        document.removeEventListener('copy','copy');
    }

    render() {
        let me = this;
        return (
            <table onClick={me.getHtmlStr.bind(me)} width="800" height="108" border="0" cellpadding="0" cellspacing="0" align="center">
                <tbody>
                    <tr>
                        <td align="center" valign="top" height="30">
                            <font face="'Microsoft Yahei', Arial, Helvetica, sans-serif"
                                style={style1}
                                >
                                <a style={{color: '#d96c0d'}} href="https://www.clubmed.com.cn/o/%E5%86%AC%E5%AD%A3%E5%81%87%E6%9C%9F%E6%97%A9%E9%B8%9F%E8%AE%A1%E5%88%92" target="_blank">{header_title}</a>
                                <br/><br/>在浏览器中阅读邮件，
                                <a href="<%@ include view='MirrorPageURLGC' %>"  target="_blank" style={{textDecoration:'underline',color:'#6E6E6E'}}>点击这里</a>
                            </font>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table width="800" height="78" border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                <tr>
                                    <td>
                                        <a href={logo_link} target="_blank">
                                            <img src={logoImg} width="270" height="78" alt="Club Med" style={{display: 'block'}} />
                                        </a>
                                    </td>
                                    <td style={{fontWeight: 'bold',color:'#005589',textAlign: 'right'}}>
                                        <p style={{paddingRight: 20}}>
                                            联系我们<br />021-6197-2846
                                        </p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
};