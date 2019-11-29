/*
 * @File:
 * @Description:原图查看组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-27 10:45:06
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-27 12:56:54
 * @FilePath: \antdup\src\imgsourceshow\index.js
 */
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { Icon } from "antd";
import "./index.less";

let imgSrcDom;

const ImgSrc = ({ imgsource }) => {
  let [size, setSize] = useState({ W: "auto", H: "auto" });
  const _onclose = () => {
    imgSrcDom.destroy();
  };

  return (
    <div className="imgSource-root">
      <img
        class={"imgSource-img"}
        alt="原图"
        src={imgsource}
        width={size.W}
        height={size.H}
      />
      <div class={"imgSource_close"} onClick={_onclose}>
        <Icon type="close-circle" />
      </div>
    </div>
  );
};

class imgModal {
  show(imgsource) {
    this.div = document.createElement("div");
    document.body.appendChild(this.div);
    ReactDom.render(<ImgSrc imgsource={imgsource} />, this.div);
  }
  destroy() {
    // 销毁
    ReactDom.unmountComponentAtNode(this.div);
    this.div.parentNode.removeChild(this.div);
  }
}

export default {
  show: imgsource => {
    imgSrcDom = new imgModal();
    imgSrcDom.show(imgsource);
  }
};
