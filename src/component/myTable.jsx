import * as React from "react";
import {track_code} from './config';

export class MyTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getTdListArr(data) {
        let w = 800;
        let style = {};
        let arr = [];
        Object.assign(style, data.block);
        if (data.style.length) {
            let imgsNum = data.style.length;
            style.width = Math.floor((w - imgsNum * (data.style[0].width || 0)) / (imgsNum + 1));
            for (var i = 0; i < imgsNum; i++) {
                let tmpData = {
                    style: data.style[i],
                    src: data.src[i],
                };
                if (data.href) {
                    tmpData.href = data.href[i];
                }
                arr.push({style}, tmpData);
            }
        } else {
            style.width = Math.floor((w - data.style.width || 0) / 2);
            arr.push({style}, data);
        }
        return arr;
    }

    generHTML(data) {
        let html = null;
        let tdList = this.getTdListArr(data);
        if (data.type === 'space') {
            html = (<tr><td style={data.style}></td></tr>);
        }

        if (data.type === 'text') {
            html = (
                <tr style={data.outterStyle}><td><table><tbody>
                    <tr>
                        {
                            tdList.map(function (item, idx) {
                                return (
                                    <td style={item.style} key={idx}>
                                        <div style={item.style} dangerouslySetInnerHTML={{__html: item.content}} />
                                    </td>
                                );
                            })
                        }
                    </tr>
                </tbody></table></td></tr>
            );
        }
        if (data.type === 'img' || data.type === 'imgs') {
            html = (
                <tr><td><table><tbody>
                    <tr>
                        {
                            tdList.map(function (item, idx) {
                                let img = <td style={item.style} key={idx}></td>;
                                if (item.src) {
                                    img = (
                                        <td style={item.style} key={idx}>
                                            <img src={item.src} />
                                        </td>
                                    );
                                }
                                if (item.href) {
                                    img = (
                                        <td style={item.style} key={idx}>
                                            <a href={item.href + track_code}><img style={item.style} src={item.src} /></a>
                                        </td>
                                    );
                                }
                                return img;
                            })
                        }
                    </tr>
                </tbody></table></td></tr>
            );
        }
        return html;
    }
    render() {
        return this.generHTML(this.props.data);
    }
};