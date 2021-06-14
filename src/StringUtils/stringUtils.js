class StringUtil {
    getXandYCordinates(e) {
        let x, y;
        x = e.evt.layerX + document.body.scrollLeft;
        y = e.evt.layerY + document.body.scrollTop;
        return { X: x, Y: y };
    }
}

const stringUtil = new StringUtil();
export default stringUtil;