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
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果要在全世界选一个最适合情侣度假的地方，很多人会毫不犹豫地说—— <span style="font-weight:bolder;color:#005589;">马尔代夫</span>！<br/>
                                        而在Club Med<span style="font-weight:bolder;color:#005589;">卡尼岛</span>度假村，马尔代夫已经不再只是情侣的代名词，<span style="font-weight:bolder;color:#005589;">全新</span>的欢乐儿童角与四间主题活动教室；<span style="font-weight:bolder;color:#005589;">全新</span>的潜水中心；<span style="font-weight:bolder;color:#005589;">全新</span>升级设施的水上套房满足您与宝贝一通尽享美妙体验。<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了感谢您的支持，即日起至7月31日预订卡尼岛度假村，<span style="font-size:21px;font-weight:bolder;color:#99d7e3;">4-11岁儿童立享半价</span>！
                                    </p>
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
                                                        <img src="images/btn.jpg" width="149" height="40" alt="假期早规划优惠享不停 " style="display:block;">
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