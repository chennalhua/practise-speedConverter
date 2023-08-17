import React, { useState } from 'react';
//*-- 速度轉換 component --*//
const NumTran = ({ inputNum, setInputNum, handleStyleTheme }) => {
    //@ VALUE 變數
    /*建立：alertText */

    //@ EVENT 事件設計
    /*建立：changeNumber */

    return (
        <div className="row text-center mt-2 align-items-baseline flex-column flex-lg-row">
            <div className="col-12 col-lg-5 mb-2">
                <h3 className="fs-5 mb-3">Mbps</h3>
                <div>
                    <label htmlFor="set" className="text-secondary fw-bolder mb-3">SET</label>
                    <input type="number" id="set" className="form-control" min="0" max="100" />
                    <p className="mb-0 mt-1 text-danger alert-text"></p>
                </div>
            </div>
            <div className="col-12 col-lg-2 mb-2">
                <div className="tranIcon"><i className="bi bi-arrow-left-right"></i></div>
                <i className="bi bi-arrow-right-short d-none d-lg-block"></i>
            </div>
            <div className="col-12 col-lg-5 my-2">
                <h3 className="fs-5 mb-3">Mb/s</h3>
                <div>
                    <p className="text-secondary fw-bolder">SHOW</p>
                    <p className="text-blue fw-bolder">
                        {/* Mbps換算MB/s要除8 */}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default NumTran