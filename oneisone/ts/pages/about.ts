import { Request, Response } from "express";
import { Dbs } from "../db";
import * as ejs from 'ejs';
import { ejsError, viewPath, ejsSuffix, buildData } from "../tools";
 
//测试
export async function about(req: Request, res: Response) {
    try {
        //let slideshowlist = await Dbs.content.homePostList();
        let header = ejs.fileLoader(viewPath + 'header/home-header' + ejsSuffix).toString();
        let main = ejs.fileLoader(viewPath + 'about' + ejsSuffix).toString();
        let footer = ejs.fileLoader(viewPath + 'footer/home-footer' + ejsSuffix).toString();

        let template = header
            + main
            + footer;
        let data = buildData(req, {
            
        });
        let html = ejs.render(template, data);
        res.end(html);
    } catch (e) {
        ejsError(e, res);
    }

};