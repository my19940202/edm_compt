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
                                        <span style="font-size:21px;font-weight:bolder;color:#005589;">提前预订2018-19冬季假期，</span><br/>
                                        <span style="font-size:21px;font-weight:bolder;color:#005589;">享受全年最低优惠55折！</span><br/><br/>
                                        为了感谢您选择Club Med度过冬季假期，我们为您开启了专属冬季早鸟优惠通道，让你提前用全年最低价锁定18-19冬季假期。
                                        海外度假村30天以上，国内度假村15天以上可以免费取消。
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="20"></td>
                    <td width="230" bgcolor="#f7f7f7">
                        <table width="231" height="114" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td width="21"></td>
                                <td>
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <tr><td height="20"></td></tr>
                                        <tr>
                                            <td height="114">
                                                <p style="color: #282727;font-size: 16px;">
                                                    会员号:<br>
                                                    <%= CLNEOTB.numcli %>
                                                    <br>
                                                    会员等级:<br>
                                                    <%@ include view='GreatMemberStatusCH' %>
                                                    <br>
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