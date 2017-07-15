<?php
header("Content-Type: application/json; charset=UTF-8");
$obtainedObj = json_decode($_POST['info']);
$returnArr=array();

class dummyObject
{
    //Declares properties
    public $Name = '';
	public $Age = '';
	public $Height = '';
	public $profession = '';
}

$returnObj = new dummyObject();
for($i = 0; $i < count($obtainedObj); $i++ ){
	$returnObj->Name = "He is called ". $obtainedObj[$i]->Name;
    $returnObj->Age = "His Age is " . $obtainedObj[$i]->Age;
    $returnObj->Height =" He has an height of " . $obtainedObj[$i]->Height;
    $returnObj->profession ="With a profession beign " . $obtainedObj[$i]->profession;

	array_push($returnArr,$returnObj);
}





$returnJSON = json_encode($returnArr);

echo $returnJSON;

?>