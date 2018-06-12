import * as React from "react";

export const MyTable = (props) => {
    let tdList = [];
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
    console.log(tdList)
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
};