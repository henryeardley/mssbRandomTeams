
function Dictionary() {
    this.t = [];

    this.add = function(key, value){
        if (key && value){
            this.t.push({
                key: key,
                value: value
            });
            return this.datastore;
        }
    };
    this.removeAt = function(key){
        for (var i = 0; i< this.t.length;i++){
            if(this.t[i].key === key){
                this.datastore.splice(this.datastore[i], 1)
                return this.datastore;
            }
        }
        return this.datastore;
    };
    this.findAt = function(key){
        for(var i = 0; i <this.datastore.length; i++){
            if(this.datastore)[i].key === key{
                return this.datastore[i].value;
            }
        }
        return this.datastore;
    };
    this.size = function(){
        return this.datastore.length;
    };
}

var Dictionary1 = new Dictionary()
Dictionary1.add("one", 1)
console.log(Dictionary1.datastore)