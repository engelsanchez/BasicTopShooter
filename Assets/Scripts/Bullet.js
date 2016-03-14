#pragma strict

var speed:float = 10.0;
var yLimit:float = 17.0;

function Start () {

}

function Update () {
	transform.Translate(0, speed * Time.deltaTime, 0);

	if (transform.position.y > yLimit) {
		Destroy(gameObject);
	}
}