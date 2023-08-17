import React, { useState } from 'react';
const Loading = ({ children, isLoading }) => {

    let inLoadingIconStyle = { //inline style 設計
        //請將 Loading icon 對齊置中於整個畫面
    }
    
    return (
        <>
            <div className={`loading-wrapper position-fixed`} style={{ zIndex: '9999', top: '0' }}>
                <div className="loading d-flex flex-column align-items-center">
                    <div className={`spinner-border text-secondary spinner-border--width `} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div style={inLoadingIconStyle}>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Loading