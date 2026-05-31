import { taskbar } from "/Application/Desktop/Module/Taskbar.js";
import { getSectionById } from "/Module/Section.js";
import { dialog } from "/Dialog/Module/Dialog.js";
import user from "/Module/User.js";

let photo = {};

photo.init = (id) => {
    taskbar.add('application.photo.viewer', id);

    photo.menu(id);
    photo.menu_application(id);
    photo.viewer(id);
}

photo.menu_application = (id) => {
    const section = getSectionById(id);
    if(!section){
        return;
    }
    dialog.click(section, '.menu-application-photo-viewer');

}

photo.menu = (id) => {
    const section = getSectionById(id);
    if(!section){
        return;
    }
    const menu = section.select('.menu');
    if(!menu){
        return;
    }
    const file = menu.select('li.file');
    const menu_file = menu.select('.menu-file');
    const menu_file_protector = menu.select('.menu-file-protector');
    if(file){
        file.on('click', (event) => {
            if(menu_file) {
                menu_file.toggleClass('display-none');
            }
            if(menu_file_protector){
                menu_file_protector.toggleClass('display-none');
            }
        });
    }
    if(menu_file_protector){
        menu_file_protector.on('click', (event) => {
            if(menu_file){
                menu_file.addClass('display-none');
                menu_file_protector.addClass('display-none');
            }
        });
    }
    const menu_file_exit = menu.select('.menu-file-exit');
    if(menu_file_exit){
        menu_file_exit.on('click', (event) => {
            taskbar.delete(section.attribute('id'));
            section.remove();
        });
    }
    dialog.click(section, '.menu');
}

photo.viewer = (id) => {
    const section = getSectionById(id);
    if(!section){
        return;
    }
    let key = user.get('key');
    let src = section.select('input[name="node.source"]')?.value;
    let type = section.select('input[name="node.type"]')?.value;
    if(key){
        src += '&key=' + key;
    }
    let image = _('_').create('img');
    image.src = src;
    image.type = type;
    const body = section.select('.body');
    body.appendChild(image);
}

export { photo }