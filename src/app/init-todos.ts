export class Init{
  load(){
      if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
          console.log('No Todos Found...Creating...');
          var todos = [
              {
                text: 'paint chickens'
              },
              {
                text: 'shave lawn'
              },
              {
                text: 'history erase'
              }
          ];
          localStorage.setItem('todos', JSON.stringify(todos));
          return
      } else {
          console.log('Found Todos...');
      }
  }
}
