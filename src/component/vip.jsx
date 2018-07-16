import * as React from "react";
import {img_site, img_telephone, img_code} from './config';
let vip_html = `
    <tr>
        <td>
            <table width="800" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="20"></td>
                    <td width="510" align="top" style="vertical-align: top;text-align: center;">
                        <table>
                            <tr>
                                <td align="top" style="vertical-align: top;text-align: left;"  width="510" height="114" bgcolor="#ffffff">
                                    <p style="font-size: 16px;line-height: 28px;">
                                        亲爱的<%@ include view='FirstNameGC' %>：<br/><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;炎炎夏日，还没有决定与TA前往何处共度夏季假期吗？
                                        <span style="font-weight:bolder;color:#99d7e3;">Club Med为您精选9座亚太度假村</span>,无论是阳光明媚，海风习习的海岛游或感受独具魅力的泰国、印度尼西亚特色文化或置身天然森林氧吧，体验一次健康之旅，您都可在Club Med度假村中尽情享受。
                                        <br/><br/>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="top" style="vertical-align: top; text-align: center;"  width="510" bgcolor="#ffffff">
                                    <a href="https://www.clubmed.com.cn/r/%E5%8D%A1%E5%B0%BC%E5%B2%9B/y">
                                        <img src="images/btn_book.jpg" style="margin: 0 auto;"  width="162" height="50" alt="假期早规划优惠享不停 " />
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="20"></td>
                    <td width="230" bgcolor="#f7f7f7">
                        <table width="231" height="230" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td width="21"></td>
                                <td>
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <tr><td height="20"></td></tr>
                                        <tr>
                                            <td height="210">
                                                <p style="color: #282727;font-size: 16px;">
                                                    会员号:<br>
                                                    <%= CLNEOTB.numcli %>
                                                    <br><br>
                                                    会员等级:<br>
                                                    <%@ include view='GreatMemberStatusCH' %>
                                                    <br><br><br><br>
                                                    <a href="https://www.clubmed.com.cn/signin?utm_source=edm&utm_medium=Email&utm_campaign=EM_EA3Y_sunS18EBBPhase10306&utm_content=edm&cmcid=EM_sunS18EBBPhase10306" target="_blank" style="display: block;margin: 0 auto;width: 140px;">
                                                        <img src="images/asset/btn.jpg" width="149" height="40" alt="假期早规划优惠享不停 " style="display:block;">
                                                    </a>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr><td height="20"></td></tr>
                                    </table>
                                </td>
                                <td width="20"></td>
                            </tr>
                        </table>
                    </td>
                    <td width="20"></td>
                </tr>
            </table>
        </td>
    </tr>
`;

export const Vip = () => {
    return (
        <tr dangerouslySetInnerHTML={{__html: vip_html}}></tr>
    );
};