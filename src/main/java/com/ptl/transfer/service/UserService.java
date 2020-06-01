package com.ptl.transfer.service;

/**
 * @author : zhoutiejun@youngyedu.com, 2020/5/28 0028 上午 11:06
 * @description :
 * @modified : zhoutiejun@youngyedu.com, 2020/5/28 0028 上午 11:06
 */
public interface UserService {
    Integer login(String username, String password);

    Integer register(String username, String password);
}
