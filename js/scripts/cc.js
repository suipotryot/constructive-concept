$(document).ready(function() {
    var scene = new DRAWASHAPE.Scene();

    scene.draw2Din(document.getElementById("canvas2D"));
    scene.draw3Din(document.getElementById("canvas3D"));

    var render = function () {
        requestAnimationFrame( render );
        scene.renderer2D.render(scene.threeScene, scene.camera2D);
        scene.renderer3D.render(scene.threeScene, scene.camera3D);
    };

    render();
});
