function receivesAFunction (diana){
    return diana()
}

const returnsANamedFunction = function(){
    return function fn(seeds){
        return seeds
    }
    fn('alex')

}

const returnsAnAnonymousFunction = function(){
    return function (){
        return ""

    }

}
