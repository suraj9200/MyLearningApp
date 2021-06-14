
export class ShapeDataModel {
    constructor() {
        this.id = 0;
        this._index = 0;
        this.x = 0;
        this.y = 0;
        this.strokeColor = "";
        this.width = 0;
        this.height = 0;
        this.strokeWidth = 0;
        this.strokeType = 0;
        this.strokeVisibility = true;
        this.closed = true;
        this.name = "";
        this.type = "";
        this.dataPoints = [];
        this.fillColor = "";
        this.opacity=0;
        this.isVisible = true;
        this.text = "";
        this.isEditMode = false;
        this.isEyeIconVisible = true;
        this.isSelected = false;
        this.bold=true;
        this.italic=false;
        this.underline=false;
        this.fontSize=0;
        this.alignment=0;
        this.fontType=0;
    }
}