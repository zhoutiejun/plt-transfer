package com.ptl.transfer.service.impl;

import com.ptl.transfer.dao.domain.User;
import com.ptl.transfer.dao.domain.UserExample;
import com.ptl.transfer.dao.mapper.UserMapper;
import com.ptl.transfer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author : zhoutiejun@youngyedu.com, 2020/5/28 0028 上午 11:07
 * @description :
 * @modified : zhoutiejun@youngyedu.com, 2020/5/28 0028 上午 11:07
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Integer login(String username, String password) {
        UserExample userExample = new UserExample();
        userExample.createCriteria().andAccountEqualTo(username).andPasswordEqualTo(password);

        Long num = userMapper.countByExample(userExample);
        if(num > 0L){
            return 200;
        }else{
            return 0;
        }
    }

    @Override
    public Integer register(String username, String password) {
        User user = new User();
        user.setAccount(username);
        user.setPassword(password);
        userMapper.insertSelective(user);
        return 200;
    }
}
