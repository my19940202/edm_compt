import * as React from "react";


export class MyTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getTdListArr(data) {
        let w = 800;
        let style = {};
        let arr = [];
        Object.assign(style, data.block);
        style.width = Math.floor((w - data.style.width || 0) / 2);
        arr.push({style}, data, {style});
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
                <tr><td><table>
                <tbody>
                    <tr>
                        {
                            tdList.map(function (item, idx) {
                                return (
                                    <td style={item.style} key={idx}>
                                        <p style={item.style} dangerouslySetInnerHTML={{__html: item.content}} />
                                    </td>
                                );
                            })
                        }
                    </tr>
                </tbody>
            </table></td></tr>
            );
        }
        if (data.type === 'img') {
            html = (
                <tr><td><table>
                <tbody>
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
                                            <a href={item.href}><img src={item.src} /></a>
                                        </td>
                                    );
                                }
                                return img;
                            })
                        }
                    </tr>
                </tbody>
            </table></td></tr>
            );
        }
        return html;
    }
    render() {
        return this.generHTML(this.props.data);
    }
    /*
    render() {
        let tdList = [];
        let props = this.props;
        switch(props.data.type) {
            case 'space':
                let space = props.data;
                tdList.push({
                    style:{
                        width: space.w || 0,
                        height: space.h || 0
                    }
                });
                break;
            
            case 'img':
            case 'text':
                let img = props.data;
                let side = {
                    style: {width: (800 - img.style.width || 0) / 2}
                };
                let itemContent = {
                    style: img.style
                };
                tdList.push(side);
                
                if (img.type === 'img') {
                    itemContent.img = true;
                    itemContent.src = img.src;
                }
                if (img.type === 'text') {
                    itemContent.text = true;
                    itemContent.content = img.content;
                }
                tdList.push(itemContent);
                tdList.push(side);
                break;
            default:
                tdList = [];
        };
        
        return (
            <tr><td><table>
                <tbody>
                    <tr>
                        {
                            tdList.map(function (item, idx) {
                                let itemX = (
                                    <td style={item.style} key={idx}></td>
                                );
                                if (item.img) {
                                    itemX = (
                                        <td style={item.style} key={idx}>
                                            <img src={item.src} />
                                        </td>
                                    );
                                }
                                if (item.text) {
                                    itemX = (
                                        <td style={item.style} key={idx}>
                                            <p style={item.style}>{item.content}</p>
                                        </td>
                                    );
                                }
                                return itemX;
                            })
                        }
                    </tr>
                </tbody>
            </table></td></tr>
        );
    }
    */ 
};