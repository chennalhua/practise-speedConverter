import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../view/HomePage';
// 建立路由器
const AppRouter = () => { //使用 react-router-dom v5 版本
    // 參考文件：https://v5.reactrouter.com/web/guides/quick-start
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'><HomePage /></Route>
                </Switch>
            </Router>
        </>
    )
}
export default AppRouter