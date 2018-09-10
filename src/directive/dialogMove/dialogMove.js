/**
 * Created by dy on 2018/9/10.
 *
 */
export  default {
    //只调用一次,初始化使用
    //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    inserted:(el,binding)=>{
        this.ipad = el;
        this.parent =document.querySelector(binding.value.parent || 'body');
        let self = this;
        el.onmousedown = function (e) {
            let disX = e.clientX - self.ipad.offsetLeft;
            let disY = e.clientY - self.ipad.offsetTop;
            this.setCapture && this.setCapture();
            document.onmousemove = function (ev) {
                let maxL =window.innerWidth- self.ipad.offsetWidth;
                let maxT =window.innerHeight- self.ipad.offsetHeight;
                let iL = ev.clientX - disX;
                let iT = ev.clientY - disY;

                iL <= 0 && (iL = 0);
                iL >= maxL && (iL = maxL);
                iT <= 0 && (iT = 0);
                iT >= maxT && (iT = maxT);

                self.ipad.style.left = iL+'px';
                self.ipad.style.top = iT+'px';
            }
            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null;
                this.releaseCapture && this.releaseCapture();
            };

            return false;
        }
    }
};