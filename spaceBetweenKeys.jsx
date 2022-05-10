app.beginUndoGroup("between");
var comp = app.project.activeItem;
var sk = comp.selectedLayers[0].selectedProperties[0].selectedKeys;
var SELECTED_PROP = comp.selectedLayers[0].selectedProperties[0];
var ARR_VALUES = [];
var TIMES_KEYS = [];
var sk1 = sk[0];
var skLast = sk[sk.length-1];
var sk1Time = comp.selectedLayers[0].selectedProperties[0].keyTime(1);
var skLastTime = comp.selectedLayers[0].selectedProperties[0].keyTime(sk.length);
var LenTime = skLastTime - sk1Time;
var step = LenTime/(sk.length-1);
var timeToPush;

for(i=0;i<sk.length;i++){
    var keyValue = comp.selectedLayers[0].selectedProperties[0].keyValue(i+1);
    ARR_VALUES.push(keyValue);
};

for(i=0;i<sk.length;i++){
    if(i==0){
        TIMES_KEYS.push(sk1Time);
        continue;
    }
    if(i==1){
        var secondTime = sk1Time+step;
        TIMES_KEYS.push(secondTime);
        continue;
    }
    if(i==sk.length-1){
        TIMES_KEYS.push(skLastTime);
        continue;
    }
    timeToPush = (i*step)+sk1Time;
    TIMES_KEYS.push(timeToPush);
};
for(i=0;i<sk.length;i++){
    if(i==sk.length-1){
        SELECTED_PROP.removeKey(i+1);
        SELECTED_PROP.setValueAtTime(skLastTime,ARR_VALUES[sk.length-1]);
        continue;
    }
    SELECTED_PROP.removeKey(i+1);
    SELECTED_PROP.setValueAtTime(TIMES_KEYS[i],ARR_VALUES[i]);
};
app.endUndoGroup();



