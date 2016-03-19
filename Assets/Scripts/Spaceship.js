#pragma strict

var speed:float = 10.0;
var xLimit:float = 18.0;
var bullet:Transform;
var fireInterval:float = .1f;
var nextFireTime:float = 0f;

function Start () {

}

function Update () {
	var translation : float = Input.GetAxis ("Horizontal") * speed * Time.deltaTime;
	var pos:Vector3;
	transform.Translate (translation, 0, 0);
	if (transform.position.x > xLimit) {
		pos = transform.position;
		pos.x = xLimit;
		transform.position = pos;
	} else if (transform.position.x < -xLimit) {
		pos = transform.position;
		pos.x = -xLimit;
		transform.position = pos;
	}

	if (Input.GetButton("Fire") && Time.time > nextFireTime){
		Instantiate(bullet, transform.position + Vector3(0, 1, 0), Quaternion.identity);
		nextFireTime = Time.time + fireInterval;
	}
}