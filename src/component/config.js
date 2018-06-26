export const track_code = '?Del_id=<%= message.delivery.id %>&utm_source=<%= targetData.SOURCE %>&utm_medium=<%= targetData.MEDIUM %>&utm_campaign=<%= targetData.TRACKINGGAP %>&UIDCM=<%= CLNEOTB.neolib %>';
export const header_title = '缤纷活动尽在Club Med';
export const header_link = `https://www.clubmed.com.cn/r/%E5%8D%A1%E5%B0%BC%E5%B2%9B/y`;


// footer
export const img_site = 'images/site.jpg';
export const img_telephone = 'images/telephone.jpg';
export const img_code = 'images/qr_code.jpg';


// content
export let emptyTable = {
    type: 'space',
    style: {height:  30}
};

export let imgsTable = {
    type: 'imgs',
    style: [{
            height: 'auto',
            width: 760,
        }, {
            height: 'auto',
            width: 760,
        }
    ],
    src: ['images/place_2.jpg','images/place_1.jpg']
};
export let posterTable = {
    type: 'img',
    style: {
        height: 320,
        width: 760,
    },
    href: 'https://www.baidu.com/',
    src: 'images/poster_bottom.jpg'
};
export let textTable = {
    type: 'text',
    style: {
        height: 100,
        width: 700,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        color: '#ddd',
        fontSize: 14,
        fontWeight: 'bold'
    },
    content: `
        <span style="color: red;">Club Med</span>为您带来多个端午小长假阳光海岛目的地限时优惠!
        即日起至2018年5月25日,预订指定度假村相应出行日期并输入优惠代码 每成人每单即可立减700元！
        带着一颗愉快的心情,带着家人、朋友、爱人前往阳光沙滩度假村享受
        完美、充满阳光的假期吧！
    `
};