ctrl_2020.prototype = (function() {

    var PROPERTIES = {
        imgsrc1: "$imgsrc1",
        imgsrc2: "$imgsrc2",
        imgalt1: "$imgalt1",
        imgalt2: "$imgalt2",
        defaultoffset: "$defaultoffset",
        orientation: "$orientation",
        beforelabel: "$beforelabel",
        afterlabel: "$afterlabel",
        nooverlay: "$nooverlay",
        movewithhandleonly: "$movewithhandleonly",
        clicktomove: "$clicktomove"
    };

    var EVENTS = {
    };
    
    var ctrl = new ctrl_base();

    ctrl.init_class_inst = function()
    {
        
        this.superclass = ctrl_base.prototype;
        this.superclass.init_class_inst.call( this );
        this.mDefaultText = "EMPTY";
        
        this.mimgsrc1 = "";
        this.mimgsrc2 = "";
        this.mimgalt1 = "";
        this.mimgalt2 = "";
        
        this.mdefaultoffset = "";
        this.morientation = 0;
        this.mbeforelabel = "";
        this.mafterlabel = "";
        this.mnooverlay = false;
        this.mmovewithhandleonly = false;
        this.mclicktomove = false;
                                        
        this.orient = "vertical";
        this.tool = null;
        this.version = "0.1";
        this.versiondate = "30.10.2017";
        
    };

    ctrl.delete_class_inst = function()
    {
        this.superclass.delete_class_inst.call(this);
    };
    
    ctrl.init_ctrl_inst = function( form, elem, rowCtrl, rowNumber )
    {
        this.superclass.init_ctrl_inst.call( this, form, elem, rowCtrl, rowNumber );
        
        var client_elem = this.getClientElem();
        var dataprops = client_elem.getAttribute('data-props');
        var datapropsobj = JSON.parse(dataprops);

        var attValue = datapropsobj.imgsrc1;
        this.setProperty(PROPERTIES.imgsrc1, attValue);

        var attValue = datapropsobj.imgsrc2;
        this.setProperty(PROPERTIES.imgsrc2, attValue);

        var attValue = datapropsobj.imgalt1;
        this.setProperty(PROPERTIES.imgalt1, attValue);

        var attValue = datapropsobj.imgalt2;
        this.setProperty(PROPERTIES.imgalt2, attValue);

        var attValue = datapropsobj.defaultoffset;
        this.setProperty(PROPERTIES.defaultoffset, attValue);

        var attValue = datapropsobj.orientation;
        this.setProperty(PROPERTIES.orientation, attValue);

        var attValue = datapropsobj.beforelabel;
        this.setProperty(PROPERTIES.beforelabel, attValue);

        var attValue = datapropsobj.afterlabel;
        this.setProperty(PROPERTIES.afterlabel, attValue);

        var attValue = datapropsobj.nooverlay;
        this.setProperty(PROPERTIES.nooverlay, attValue);

        var attValue = datapropsobj.movewithhandleonly;
        this.setProperty(PROPERTIES.movewithhandleonly, attValue);

        var attValue = datapropsobj.clicktomove;
        this.setProperty(PROPERTIES.clicktomove, attValue);

        //  MODSTART ***********************************************************¯
        var img1 = client_elem.childNodes[0];
        img1.src = this.mimgsrc1;
        img1.alt = this.mimgalt1;
        
        var img2 = client_elem.childNodes[1];
        img2.src = this.mimgsrc2;
        img2.alt = this.mimgalt2;
        
        /* ensure images have same dimension */
        img1.style.height = client_elem.style.height;
        img1.style.width = client_elem.style.width;
        
        img2.style.height = img1.style.height;
        img2.style.width = img1.style.width;
        img2.height = img1.height;
        img2.width = img1.width;
        img2.top = img1.top;
        img2.left = img1.left;
        
        var mID = client_elem.id;
        
        this.tool = $('#'+mID).twentytwenty({
          default_offset: this.mdefaultoffset,
          orientation: this.orient,
          before_label:this.mbeforelabel,
          after_label:this.mafterlabel,
          no_overlay:this.mnooverlay,
          move_with_handle_only:this.mmovewithhandleonly,
          click_to_move: this.mclicktomove
        });
                 
        //  ************************************************************  MODEND¯

        this.update();

        return false
    };

    ctrl.updateCtrl = function(what, row, col, mustUpdate)
    {
        var elem = this.getClientElem();
    };

    ctrl.getProperty = function(propNumber)
    {
        switch (propNumber) {
            case eBaseProperties.text:
                return this.mText;
            case PROPERTIES.imgsrc1:
                return this.mimgsrc1;
            case PROPERTIES.imgsrc2:
                return this.mimgsrc2;
            case PROPERTIES.imgalt1:
                return this.mimgalt1;
            case PROPERTIES.imgalt2:
                return this.mimgalt2;
            case PROPERTIES.defaultoffset:
                return this.mdefaultoffset;
            case PROPERTIES.orientation:
                return this.morientation;
            case PROPERTIES.beforelabel:
                return this.mbeforelabel;
            case PROPERTIES.afterlabel:
                return this.mafterlabel;
            case PROPERTIES.nooverlay:
                return this.mnooverlay;
            case PROPERTIES.movewithhandleonly:
                return this.mmovewithhandleonly;
            case PROPERTIES.clicktomove:
                return this.mclicktomove;
        }
        return this.superclass.getProperty.call(this, propNumber);
    };
    
    ctrl.getCanAssign = function(propNumber)
    {
        switch (propNumber) {
            case eBaseProperties.text:
            case PROPERTIES.imgsrc1:
            case PROPERTIES.imgsrc2:
            case PROPERTIES.imgalt1:
            case PROPERTIES.imgalt2:
            case PROPERTIES.defaultoffset:
            case PROPERTIES.orientation:
            case PROPERTIES.beforelabel:
            case PROPERTIES.afterlabel:
            case PROPERTIES.nooverlay:
            case PROPERTIES.movewithhandleonly:
            case PROPERTIES.clicktomove:
                return true;
        }
        return this.superclass.getCanAssign.call(this, propNumber);
    };

    ctrl.setProperty = function( propNumber, propValue )
    {
        if (!this.getCanAssign(propNumber)) 
            return false;

        switch (propNumber) {
            case eBaseProperties.text:
                this.mText = propValue;
                var client_elem = this.getClientElem();
                client_elem.innerHTML = propValue;
                return true;
            case PROPERTIES.imgsrc1:
                this.mimgsrc1 = propValue;
                return true;
            case PROPERTIES.imgsrc2:
                this.mimgsrc2 = propValue;
                return true;
            case PROPERTIES.imgalt1:
                this.mimgalt1 = propValue;
                return true;
            case PROPERTIES.imgalt2:
                this.mimgalt2 = propValue;
                return true;
            case PROPERTIES.defaultoffset:
                this.mdefaultoffset = propValue;
                return true;
            case PROPERTIES.orientation:
                this.morientation = propValue;
                this.orient = this.morientation == 0 ? "horizontal" : "vertical";
                return true;
            case PROPERTIES.beforelabel:
                this.mbeforelabel = propValue;
                return true;
            case PROPERTIES.afterlabel:
                this.mafterlabel = propValue;
                return true;
            case PROPERTIES.nooverlay:
                this.mnooverlay = propValue;
                return true;
            case PROPERTIES.movewithhandleonly:
                this.mmovewithhandleonly = propValue;
                return true;
            case PROPERTIES.clicktomove:
                this.mclicktomove = propValue;
                return true;
        }
        return this.superclass.setProperty.call( this, propNumber, propValue ); 
    };

    ctrl.addClickHandlers = function(elem)
    {
        if (!this.usesTouch) {
            elem.onclick = this.mEventFunction;
        }
        else {
            elem.ontouchstart = this.mEventFunction;
            elem.ontouchend = this.mEventFunction;
        }
    };     
    ctrl.handleClick = function(pX, pY)
    {
        if (this.canSendEvent(eBaseEvent.evClick)) {
            this.eventParamsAdd("pXPos", pX);
            this.eventParamsAdd("pYPos",pY);

            this.sendEvent(eBaseEvent.evClick);
        }
    };
    ctrl.sizeChanged = function ()
    {
        this.superclass.sizeChanged();
        var elem = this.getClientElem();
        elem.style.lineHeight = elem.style.height
    };       

    return ctrl;
})();

/**
 * Constructor for our control.
 * @constructor
 */
function ctrl_2020()
{
    this.init_class_inst(); // initialize our class
}
