import * as React from "react";
import {MyTable} from "./MyTable";
import {Vip} from "./Vip";
import {posterTable, emptyTable, imgTable, textTable} from './config';
export const Content = () => {
    return (
        <table width="800" border="0" cellpadding="0" cellspacing="0" align="center">
            <tbody>
                <MyTable data={posterTable}/>
                <MyTable data={emptyTable}/>
                <MyTable data={imgTable}/>
                <MyTable data={emptyTable}/>
                <MyTable data={textTable}/>
                <Vip/>
                <MyTable data={emptyTable}/>
            </tbody>
        </table>
    );
};