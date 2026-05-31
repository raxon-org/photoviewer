//{{RAX}}
import { version } from "/Module/Priya.js";
import { root } from "/Module/Web.js";
import { dialog } from "/Dialog/Module/Dialog.js";
import { photo } from "/Application/Photoviewer/Module/Photo.js"

require(
    [
        root() + 'Application/Photoviewer/Css/Photoviewer.css?' + version(),
        root() + 'Dialog/Css/Dialog.css?' + version(),
    ],
    function(){
        photo.init("{{$id}}");
        dialog.init("{{$id}}");
    }
);