const St = imports.gi.St;
const Main = imports.ui.main;
const Shell = imports.gi.Shell;

let button, app;

function _runAnaconda() {
    app.activate();
}

function init() {

    // find anaconda.desktop app
    let shell = new Shell.AppSystem.get_default();
    apps = shell.get_all().filter(function(app) {
        return app.get_id() == 'anaconda.desktop'
    });
    if (apps.length <= 0) {
        // we will report an error
    } else {
        app = apps[0];
    };

    // create UI
    box = new St.BoxLayout();

    if (app != null) {
    let height = Main.panel._activitiesButton.actor.get_height();
        let icon = app.create_icon_texture(height);
        box.add(icon);
    };

    let text = 'Anaconda not found';
    if (app != null) {
        text = app.get_name();
    };
    let label = new St.Label({ text: text,
                   style_class: 'text-label' });
    box.add(label);

    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          track_hover: true });
    button.set_child(box);
    button.connect('button-press-event', _runAnaconda);
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
