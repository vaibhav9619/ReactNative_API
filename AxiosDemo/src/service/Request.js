export default{

    getDetails:function(){
        return{
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/posts'
        };
    },
    
    setDetails:function(body){
        return{
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body: body,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        };
    },
    putDetails:function(body){
        return{
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body: body,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        };
    }
}