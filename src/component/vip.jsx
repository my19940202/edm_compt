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
                                    <p style="font-size: 16px;line-height: 24px;">
                                        亲爱的<%@ include view='FirstNameGC' %>：<br/><br/>
                                        为什么越来越多的父母相信我们的度假产品？因为他们深知自己的孩子在Club Med收获的
                                        不仅仅有纯粹的欢乐还有能力的提升。无论是2-3岁的儿童还是17岁的青年，我们根据度假
                                        村的情况为他们提供了一系列的设施和活动，在专业热情G.O的带领下他们会很快融入这个
                                        欢乐的氛围，并探索自身发展的潜能。
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