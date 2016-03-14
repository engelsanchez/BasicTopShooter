#pragma strict

var enemy : Transform;
var origin : Vector3;
var nextSpawnTime : float = 0;
var nextWaveTime : float;
var spawnGap : float = 1;
var waveTime : float;
var waveDuration : float = 10;
var waveGap : float = 10;
var inWave : boolean = false;
var xMin : float = -16f;
var xMax : float = 16f;
var xSpeed : float = 10;

function Start () {
	nextWaveTime = Time.time + waveGap;
	origin.x = xMin;

}

function Update () {
	origin.x += xSpeed * Time.deltaTime;
	if (origin.x > xMax) {
		origin.x = xMin;
	}
	if (!inWave && Time.time > nextWaveTime) {
		inWave = true;
		waveTime = -Time.deltaTime;
		nextSpawnTime = Time.time + spawnGap;
	}

	if (inWave) {
		if (Time.time >= nextSpawnTime) {
			Instantiate(enemy, origin, Quaternion.identity);
			nextSpawnTime = Time.time + spawnGap;
		}
		waveTime += Time.deltaTime;
		if (waveTime > waveDuration) {
			nextWaveTime = Time.time + waveGap;
			inWave = false;
		}
	}
}