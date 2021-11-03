import Noty from 'noty';
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";

class Notify {

    success(message){
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: message,
            timeout: 3000,
            progressBar:true,
            closeWith: ['click', 'button']
        }).show();
    }

    error(message){
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: message,
            timeout: 3000,
            progressBar:true,
            closeWith: ['click', 'button']
        }).show();
    }
    warning(message){
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: message,
            timeout: 3000,
            progressBar:true,
            closeWith: ['click', 'button']
        }).show();
    }
    alert(message){
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: message,
            timeout: 3000,
            progressBar:true,
            closeWith: ['click', 'button']
        }).show();
    }

}
export default Notify = new Notify();