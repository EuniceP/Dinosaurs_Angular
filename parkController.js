angular
  .module('JurassicApp')
  .controller('ParkController', parkController);

// Controller
function parkController() {
  this.greeting = 'Welcome to Jurassic Park';
  this.task= "";
  this.taskCount = 0;
  this.noTasks = false;
  this.todoDelete = todoDelete;
  this.todoAdd = todoAdd;
  this.calculateTasks = calculateTasks;

  var self = this;  // self = parkController
  
  // Task list
  this.todos = [
    {task: 'Get out of the Jeep', done: true},
    {task: 'Run away from the T-Rex', done: false},
    {task: 'Climb the fence', done: false},
    {task: 'Dodge the herd of dinosaurs', done: false},
    {task: 'Turn the power back on', done: false},
    {task: 'Escape the raptors in the kitchen', done: false},
    {task: 'Figure out a way off the island', done: false}
    ];
    self.taskCount =6;
  
  function todoDelete($index) {
    if (!self.todos[$index].done) 
      self.taskCount -= 1;
    self.todos.splice($index,1);
   }

  function todoAdd(){
    self.todos.push({task: self.todoText, done:false});
    self.todoText = null;
    self.taskCount += 1;
  }

  function calculateTasks($index) {
    //self.taskCount = (self.todos.length;
    if (self.todos[$index].done) 
      self.taskCount -= 1;
    else
      self.taskCount += 1;
    self.noTasks  = (self.taskcount==0 ? true : false);
   }
  
}
