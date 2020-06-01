package com.ptl.transfer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author : zhoutiejun@youngyedu.com, 2020/5/28 0028 上午 11:17
 * @description :
 * @modified : zhoutiejun@youngyedu.com, 2020/5/28 0028 上午 11:17
 */
@Controller
public class PageController {

    @RequestMapping("/page/{name}")
    public ModelAndView page(@PathVariable String name){
        return new ModelAndView(name);
    }
}
