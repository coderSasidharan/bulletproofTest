function hasCollided(a,b){
    bulletRightEdge=a.x+a.width/2;
    wallLeftEdge=b.x-b.width/2;
    if (bulletRightEdge>=wallLeftEdge){
        return true;
    }else{
        return false;
    }
}

