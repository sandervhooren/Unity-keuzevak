#pragma strict
var speed : float = 10.0;
var rotationSpeed : float = 100.0;
function Update () {
    var translation : float = Input.GetAxis ("Vertical") * speed;
    var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
    translation *= Time.deltaTime;
    rotation *= Time.deltaTime;
    transform.Translate (0, 0, translation);
    transform.Rotate (0, rotation, 0);
}
