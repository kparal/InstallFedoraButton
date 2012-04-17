const St = imports.gi.St;
const Main = imports.ui.main;
const Shell = imports.gi.Shell;

let button, app;

// execute anaconda after button has been clicked
function _runAnaconda() {
    app.activate();
}

// init() runs on gnome-shell start
function init() {
    // == find anaconda.desktop app ==
    shell = new Shell.AppSystem.get_default();
    apps = shell.get_all().filter(function(app) {
        // liveinst.desktop is renamed to anaconda.desktop on LiveCD
        return app.get_id() == 'anaconda.desktop' || app.get_id() == 'liveinst.desktop';
    });
    if (apps.length <= 0) {
        // anaconda is not present or its desktop file is hidden
        // we don't want to display this extension in that case either
        global.log('Anaconda not installed or hidden, not showing InstallFedoraButton extension');
        return;
    } else {
        app = apps[0]; //there should be only one
    };

    // == create UI ==
    box = new St.BoxLayout();

    // add icon
    height = Main.panel._activitiesButton.actor.get_height(); // get ideal icon size
    icon = app.create_icon_texture(height);
    box.add(icon);

    // add text
    text = app.get_name();
    label = new St.Label({ text: text,
                           style_class: 'text-label' });
    box.add(label);

    // create a button
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          track_hover: true });
    button.set_child(box);
    button.connect('button-press-event', _runAnaconda);
}

// enable this extension
function enable() {
    if (button != null) {
        Main.panel._rightBox.insert_child_at_index(button, 0);
    };
}

// disable this extension, revert all changes
function disable() {
    if (button != null) {
        Main.panel._rightBox.remove_child(button);
    }
}
