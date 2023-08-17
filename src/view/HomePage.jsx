import React, { useEffect, useState } from 'react';
const HomePage = () => {
    //@ VALUE 變數
    /*建立：isLoading , inputNum , changeTheme*/

    useEffect(() => {
    }, [])

    //@ EVENT 事件設計
    /*建立：handleThemeChange , handleStyleTheme */
    

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center px-2">
                    <div className=" col-md-11 col-lg-5 speed-box p-3 mt-4">
                        <div className="form-check form-switch mb-3">
                            <label className="form-check-label d-line-block position-relative" htmlFor="styeTheme">
                                <input className="form-check-input me-2" type="checkbox" id="styeTheme" />
                            </label>
                        </div>
                        <header className="bg-primary text-light py-2 text-center">
                            <h1 className="fs-5 mb-0">Network Speed Converter</h1>
                        </header>
                        <main className="container py-4">
                            {/* 數字轉換 component */}
                        </main>
                        <footer>
                            {/* 狀態卡 component */}
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage