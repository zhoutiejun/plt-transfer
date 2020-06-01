package com.ptl.transfer.controller;

import com.ptl.transfer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author : zhoutiejun@youngyedu.com, 2020/5/28 0028 上午 11:06
 * @description :
 * @modified : zhoutiejun@youngyedu.com, 2020/5/28 0028 上午 11:06
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 登录
     */
    @PostMapping("/login")
    public Integer login(String username, String password){
        return userService.login(username, password);
    }

    /**
     * 登录
     */
    @PostMapping("/register")
    public Integer register(String username, String password){
        return userService.register(username, password);
    }
}
