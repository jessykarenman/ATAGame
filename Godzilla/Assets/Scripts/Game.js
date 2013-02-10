#pragma strict

//Gizmo code:
function OnDrawGizmos() {
	Gizmos.DrawIcon(transform.position, "Game.png");
}


var npcPrefab : GameObject;
var cityGrid : CityGrid;

function Start () {
	cityGrid = GameObject.Find("CityGrid").GetComponent(CityGrid);
	cityGrid.Start();
	if ( npcPrefab != null ) {
		spawnNPCs();
	}
}

//Spawn a bunch of random NPCs:
function spawnNPCs() {
	var availableWorldPoints : Array = cityGrid.getAvailableWorldPoints();
	
	Debug.Log("NPC Spawned!  World Points available:"+availableWorldPoints.length);
	var worldPoint : Vector3;
	for ( var ii : int = 0; ii < availableWorldPoints.length; ii++ ) {
		worldPoint = availableWorldPoints[ii];
		spawnNPCsInWorldPoint(worldPoint);
	}
}
function spawnNPCsInWorldPoint( worldPoint : Vector3 ) {
	var numNPCs : int = 3;
	for ( var ii : int = 0; ii < numNPCs; ii++ ) {
		spawnNPCInWorldPoint(worldPoint);
	}
}
function spawnNPCInWorldPoint( worldPoint : Vector3 ) {
	var npcY : float = 0.1;
	var npcOffset : Vector3 = new Vector3(Random.Range( -0.4, 0.4), npcY, Random.Range( -0.4, 0.4) );
	var npcFacing : Quaternion = Quaternion.AngleAxis(Random.Range(0,360), Vector3.up);
	var npc : GameObject = Instantiate( npcPrefab, worldPoint+npcOffset, npcFacing );
	Debug.Log("NPC Spawned!");
}






function Update () {

}