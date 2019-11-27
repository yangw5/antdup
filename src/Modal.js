/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-25 14:00:41
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-25 14:00:51
 * @FilePath: \react-antdup\src\Modal.js
 */
import ReactDom from "react-dom";

export default class Modal {
  initDom() {
    this.div = document.getElementById("react-admin__modal");
    if (!this.div) {
      this.div = document.createElement("div");
      this.div.setAttribute("id", "react-admin__modal");
      document.body.appendChild(this.div);
    }
  }
  show(children) {
    // 显示
    this.initDom();
    ReactDom.render(children, this.div);
  }
  destroy() {
    // 销毁
    ReactDom.unmountComponentAtNode(this.div);
    this.div.parentNode.removeChild(this.div);
  }
}
