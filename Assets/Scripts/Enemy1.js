#pragma strict

var speed : float = 10;
var angularSpeed : float = 30;
var yMin : float = -1;

function Start () {

}

function Update () {
	transform.Translate(0, -speed * Time.deltaTime, 0);
	transform.Rotate(0, angularSpeed * Time.deltaTime, 0);
}


function OnTriggerEnter() {
	Destroy(gameObject);
}